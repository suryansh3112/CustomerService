const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  product_name: { type: String, required: true },
  product_id: { type: Number, required: true },
  status: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
