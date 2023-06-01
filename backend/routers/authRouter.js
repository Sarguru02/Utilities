const express = require("express");
const router = express.Router();
const passport = require("passport");
const signup = require("../controllers/handleSignup");
const { checkNotAuthenticated } = require("../controllers/authenticator");

router
  .route("/login")
  .get(checkNotAuthenticated,passport.authenticate("local"))
  .post(checkNotAuthenticated,passport.authenticate("local"), (req, res) => {
    if(req.session){
      res.send({isLogged:true})
    }else{
      res.send({isLogged:false,status:"Invalid credentials"})
    }
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
