const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/WebAppDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connection established.");
});

const userRoute = require("./route/User.route");
const orderRoute = require("./route/Orders.route");

app.use("/order", orderRoute);
app.use("/user", userRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000.");
});
