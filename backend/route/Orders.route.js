const router = require("express").Router();
const Order = require("../models/Order.model");

router.post("/newOrder", (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    address: req.body.address,
    product_name: req.body.product_name,
    product_id: req.body.product_id,
  });

  newOrder.save((err) => {
    if (!err) {
      res.send("Order added");
    } else {
      res.send(err);
    }
  });
});

router.get("/", (req, res) => {
  Order.find({}, (err, orders) => {
    if (!err)
      if (orders.length === 0) res.send("empty");
      else res.send(orders);
    else res.send(err);
  });
});

module.exports = router;
