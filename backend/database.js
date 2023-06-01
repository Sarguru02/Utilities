const mongoose = require("mongoose");

const connection = new mongoose.createConnection(
  "mongodb://localhost:27017/userDB"
);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
});

module.exports = connection.model("User", userSchema);
