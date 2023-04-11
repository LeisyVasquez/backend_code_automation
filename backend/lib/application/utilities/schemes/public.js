const Joi = require('joi')

module.exports = {
  publicTestsScheme: Joi.object({
    id: Joi.number().integer().required(),
    campo1: Joi.string().max(10).required(),
    campo2: Joi.number().integer().required(),
  }).label('public_tests'),

}
