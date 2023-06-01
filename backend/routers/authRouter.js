const express = require("express");
const app = express();
const router = require("express").Router();
const passport = require("passport");
const signup = require("../controllers/handleSignup");
const { checkNotAuthenticated } = require("../controllers/authenticator");

router
  .route("/login")
  .post(checkNotAuthenticated, passport.authenticate("local"))
  .get(checkNotAuthenticated, (req, res) => {
    res.json({ isLogged: false, status: "User not logged in" });
  });

router.route("/signup").post(checkNotAuthenticated, signup);

router.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.json({ isLogged: false });
  });
});

module.exports = router;
