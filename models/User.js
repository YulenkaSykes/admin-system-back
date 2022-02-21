global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const { model, Schema } = require("mongoose");

const User = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
  profiles: { type: Array, required: false },
});

module.exports = model("User", User);
