const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,

    minlength: 3,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  password: { type: String, required: true, trim: true, minlength: 5 },
  //   order: [
  //     {
  //       name: { type: String, required: true },
  //       address: { type: String, required: true },
  //       product_name: { type: String, required: true },
  //       product_id: { type: Number, required: true },
  //     },
  //   ],
  status: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
