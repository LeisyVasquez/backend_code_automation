const Joi = require("joi");

module.exports = {
  gnrDbPortsScheme: Joi.object({
    id: Joi.number().integer().max(32767).required(),
    number: Joi.number().integer().min(1).max(65534).required(),
  }).label("gnr_db_ports"),
};