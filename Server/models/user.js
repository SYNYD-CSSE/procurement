const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", UserSchema);
