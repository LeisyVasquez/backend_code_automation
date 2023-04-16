const Joi = require('joi')

module.exports = {
  publicTestsScheme: Joi.object({
    id: Joi.number().integer().required(),
    campo1: Joi.string().max(10).required(),
    campo2: Joi.number().integer().required(),
  }).label('public_tests'),

}

module.exports = {
  publicgeneralProjectsScheme: Joi.object({
    id: Joi.number().integer().required(),
    descripcion: Joi.string().max(100).required(),
    name: Joi.string().max(200).required(),
    license: Joi.string().max(4000).allow(null),
    name_repository: Joi.string().max(214).required().regex(/^[a-z_]+$/),
    url_repository: Joi.string().max(1000).required().regex(/^https?:\/\/.+/),
    name_branch_repository: Joi.string().max(255).required(),
    name_database: Joi.string().max(63).required().regex(/^[a-zA-Z_][a-zA-Z0-9_$]*$/),
    host_database: Joi.string().max(39).required().regex(/^(\d{1,3}\.){3}\d{1,3}$/),
    port_database: Joi.number().integer().required(),
    name_user_dba: Joi.string().max(63).required().regex(/^[^0-9]\S*$/),
    password_user_dba: Joi.string().max(4000).required(),
    version_packaje_json: Joi.string().max(20).allow(null),
    name_documentation: Joi.string().max(200).required(),
    version_documentation: Joi.string().max(20).required(),
    created_at: Joi.date().iso().required(),
    update_at: Joi.date().iso().required(),
  }).label('public_general.projects'),
};

