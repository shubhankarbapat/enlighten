import { json } from "express";
import User from "../models/user.js";
import { hashPassword, comparePassword } from "../utils/auth.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    //console.log(req.body);
    const { name, email, password } = req.body;

    //validation
    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be min 6 characters long");
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is already taken");

    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // console.log("saved user", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if the database has user with that email
    const user = await User.findOne({ email }).exec();
    if (!user) return res.send(400).send("No user found");

    const match = await comparePassword(password, user.password);
    // create signed JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    // return user and token to client, exclude hashedPassword
    user.password = undefined;
    // send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
    });
    // send user as json response
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ message: "Signout Success" });
  } catch (err) {
    console.log(err);
  }
};

export const currentUser = async (req, res) => {
  try {
    // console.log(req.user._id);
    // console.log(req._id);
    const user = await User.findById(req.auth._id).select("-password").exec();
    console.log("current user", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};
