const router = require("express").Router();
const User = require("../models/User.model");

router.post("/createUser", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });

  newUser.save((err) => {
    if (!err) {
      res.send("User added");
    } else {
      res.send(err);
    }
  });
});

router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (!err)
      if (users.length === 0) res.send("empty");
      else res.send(users);
    else res.send(err);
  });
});

router.get("/:name", (req, res) => {
  User.find({ username: req.params.name }, (err, user) => {
    if (!err) {
      if (user.length !== 0) {
        res.send(user);
      } else {
        res.send("No user found");
      }
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
