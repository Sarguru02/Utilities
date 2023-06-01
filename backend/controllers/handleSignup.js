const crypto = require("crypto");
const User = require("../database");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const existingUser = await User.findOne({ username: req.body.username });
  if (existingUser) {
    res.json({ isLogged: false, status: "username already taken" });
    return;
  }
  const passwordHash = await bcrypt.hash(req.body.password, 10);
  const newUser = await User.create({
    username: req.body.username,
    password: passwordHash,
    userId: crypto.randomUUID(),
  });
  await newUser.save();
  const nondbUser = {
    username: req.body.username,
    id: newUser._id,
    userId: newUser.userId,
  };
  req.login(nondbUser, (err) => {
    if (err) {
      return next(err);
    }
    res.json({ isLogged: true, username: nondbUser.username });
  });
};
