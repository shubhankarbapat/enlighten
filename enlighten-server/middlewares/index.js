import { expressjwt } from "express-jwt";

export const requireSignin = expressjwt({
  getToken: function fromHeaderOrQuerystring(req, res) {
    return req.cookies.token;
  },
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});