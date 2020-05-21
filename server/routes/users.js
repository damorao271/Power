const { User, validate } = require("../models/user.model");
const express = require("express");
const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find().sort("name");
  res.send(users);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // let verify = await User.findOne({ email: req.body.email });
  // if (verify) return res.status(400).send("User already registered");

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user = await user.save();

  res.send(user);
});

module.exports = router;
