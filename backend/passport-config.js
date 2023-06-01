const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("./database");

function initializePassport(passport) {
  const authenticateUser = async (usernameform, password, done) => {
    const user = await User.findOne({ username: usernameform });
    if (!user) {
      return done(null, false, { message: "no user with that email" });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password is incorrect" });
      }
    } catch (error) {
      return done(error);
    }
  };
  passport.use(new localStrategy(authenticateUser));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const foundUser = await User.findById(id);
      done(null, foundUser);
    } catch (error) {
      done(error);
    }
  });
}

module.exports = initializePassport;
