const Joi = require("joi");

module.exports = {
  gnrDbPortsScheme: Joi.object({
    id: Joi.number().integer().max(32767).required(),
    number: Joi.number().integer().min(1).max(65534).required(),
  }).label("gnr_db_ports"),
  gnrDbHostsScheme: Joi.object({
    id: Joi.number().integer().max(32767).required(),
    url: Joi.string()
      .pattern(
        /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+\.[a-zA-Z]{2,}(\/.*)?$|^(([0-9]{1,3}\.){3}[0-9]{1,3})$|^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:([0-9A-Fa-f]{1,4})?))$/,
        "db_hosts_valid_url"
      )
      .max(1000)
      .required(),
    createdAt: Joi.date().required().description("Es tipo timestamp"),
    updatedAt: Joi.date().required().description("Es tipo timestamp"),
  }).label("gnr_db_hosts"),
};
