const mongoose = require("mongoose");
const Joi = require("joi");

const typeSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 2, trim: true },
  gender: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1,
    trim: true,
  },
});

const Type = mongoose.model("Type", typeSchema);

function validateType(type) {
  const schema = {
    name: Joi.string().min(2).required(),
    gender: Joi.string().min(1).max(1).required(),
  };
  return Joi.validate(type, schema);
}

module.exports.Type = Type;
module.exports.validate = validateType;
