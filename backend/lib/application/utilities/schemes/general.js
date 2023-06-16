const Joi = require('joi')

module.exports = {
  response400Scheme: Joi.object({
    statusCode: Joi.number().integer().valid(400).required(),
    error: Joi.string().valid('Bad Request').required(),
    message: Joi.string()
      .valid('Invalid request params input', 'Invalid request payload input')
      .required()
  }).label('response_400'),

  response401Scheme: Joi.object({
    statusCode: Joi.number().integer().valid(401).required(),
    error: Joi.string().valid('Unauthorized').required(),
    message: Joi.string().valid('Unauthorized').required()
  }).label('response_401'),

  response412Scheme: Joi.object({
    statusCode: Joi.number().integer().valid(412).required(),
    error: Joi.string().valid('Precondition Failed').required(),
    message: Joi.string().valid('Token expired').required()
  }).label('response_412'),

  responseIdNotFoundScheme: (code) => (
    Joi.object({
      statusCode: Joi.number().integer().valid(code).required(),
      error: Joi.string().valid('Unknown').required(),
      message: Joi.string().valid('Id not found').required()
    }).label(`response_${code}`)
  ),

  responseCannotBeDeletedScheme: (code) => (
    Joi.object({
      statusCode: Joi.number().integer().valid(code).required(),
      error: Joi.string().valid('Unknown').required(),
      message: Joi.string().valid('This element cannot be deleted').required()
    }).label(`response_${code}`)
  ),
  
  responseCannotBeModifiedScheme: (code) => (
    Joi.object({
      statusCode: Joi.number().integer().valid(code).required(),
      error: Joi.string().valid('Unknown').required(),
      message: Joi.string().valid('This element cannot be changed.').required()
    }).label(`response_${code}`)
  ),

  responseUniqueViolatedScheme: (code) => (
    Joi.object({
      statusCode: Joi.number().integer().valid(code).required(),
      error: Joi.string().valid('Unknown').required(),
      message: Joi.string()
        .valid('The constraint of a unique field is being violated.')
        .required()
    }).label(`response_${code}`)
  ),

  response500Scheme: Joi.object({
    statusCode: Joi.number().integer().valid(500).required(),
    error: Joi.string().valid('Internal Server Error').required(),
    message: Joi.string().valid('An internal server error occurred').required()
  }).label('response_500'),

  response503Scheme: Joi.object({
    statusCode: Joi.number().integer().valid(503).required(),
    error: Joi.string().valid('Service Unavailable').required(),
    message: Joi.string().valid('Service Unavailable').required()
  }).label('response_503'),

  response409Scheme: Joi.object({
    statusCode: Joi.number().integer().valid(409).required(),
    error: Joi.string().valid('Conflict').required(),
    message: Joi.string().valid('Conflict').required()
  }).label('response_409'),
}
