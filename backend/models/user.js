const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  sales: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema); // will use "users" collection automatically
