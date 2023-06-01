module.exports.checkAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.json({ isLogged: false });
};

module.exports.checkNotAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.json({ username: req.user.username, isLogged: true });
  }

  next();
};
