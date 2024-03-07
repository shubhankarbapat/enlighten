import User from "../models/user.js";
import Course from "../models/course.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET);
import queryString from "query-string";
import { response } from "express";
export const makeInstructor = async (req, res) => {
  try {
    // find user
    // console.log(req.body);
    const user = await User.findById(req.body.user._id).exec();
    // if user dont have stripe account id yet, then create new
    if (!user.stripe_account_id) {
      const account = await stripe.accounts.create({ type: "express" });
      // console.log('Account=> ', account.id)
      user.stripe_account_id = account.id;
      user.save();
    }
    // create account link based on account id
    let accountLink = await stripe.accountLinks.create({
      account: user.stripe_account_id,
      refresh_url: process.env.STRIPE_REDIRECT_URL,
      return_url: process.env.STRIPE_REDIRECT_URL,
      type: "account_onboarding",
    });
    // pre-fill any info such as email
    accountLink = Object.assign(accountLink, {
      "stripe_user[email]": user.email,
    });
    // then send the account link as response to frontend
    res.send(`${accountLink.url}?${queryString.stringify(accountLink)}`);
  } catch (err) {
    console.log("Make instructor err", err);
  }
};

export const getAccountStatus = async (req, res) => {
  try {
    console.log(req.auth._id);
    const user = await User.findById(req.auth._id).exec();
    const account = await stripe.accounts.retrieve(user.stripe_account_id);
    // console.log(account);

    if (!account.charges_enabled) {
      return res.status(401).send("Unauthorized");
    } else {
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          stripe_seller: account,
          $addToSet: { role: "Instructor" },
        },
        { new: true }
      )
        .select("-password")
        .exec();
      res.json(statusUpdated);
    }
  } catch (err) {
    console.log(err);
  }
};

export const currentInstructor = async (req, res) => {
  try {
    let user = await User.findById(req.auth._id).select("-password").exec();
    if (!user.role.includes("Instructor")) {
      return res.sendStatus(403);
    } else {
      res.json({ ok: true });
    }
  } catch (err) {
    console.log(err);
  }
};

export const instuctorCourses = async (req, res) => {
  try {
    const courses = await Course.find({ instructor: req.auth._id })
      .sort({ createdAt: -1 })
      .exec();
    res.json(courses);
  } catch (err) {
    console.log(err);
  }
};
