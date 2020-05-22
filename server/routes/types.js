const { Type, validate } = require("../models/type.model");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const types = await Type.find();
  res.send(types);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let type = new Type({
    name: req.body.name,
    gender: req.body.gender,
  });

  type = await type.save();

  res.send(type);
});

module.exports = router;
