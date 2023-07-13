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

  gnrLicenses: Joi.object({
    id: Joi.number().integer().max(32767).required(),
    content: Joi.string().max(4000).required(),
  }).label("gnr_licenses"),

  gnrProjects: Joi.object({
    id: Joi.number().integer().max(32767).required(),
    description: Joi.string().max(100),
    name: Joi.string().max(200).required(),
    licenseId: Joi.number().integer().max(32767),
    nameRepository: Joi.string()
      .pattern(/^[a-zA-Z_][a-zA-Z0-9_]*$/, "projects_valid_name_repository")
      .max(100)
      .required(),
    urlRepository: Joi.string()
      .pattern(
        /^https?:\/\/(?:www\.)?github\.com\/.*\.git$/,
        "projects_valid_url_repository"
      )
      .max(1000)
      .required(),
    nameBranchRepository: Joi.string()
      .pattern(/^\S+$/, "projects_valid_name_branch_repository")
      .max(250)
      .required(),
    nameDatabase: Joi.string()
      .pattern(/^[a-zA-Z]+(_?[a-zA-Z]+)*$/, "projects_valid_name_database")
      .max(63)
      .required(),
    dbPortId: Joi.number().integer().max(32767).required(),
    dbHostId: Joi.number().integer().max(32767).required(),
    nameUserDba: Joi.string()
      .pattern(/^[a-zA-Z]+(_?[a-zA-Z]+)*$/, "projects_valid_name_user_dba")
      .max(63)
      .required(),
    passwordUserDba: Joi.string().max(4000).required().description('Este campo no será mostrado a ningun usuario'),
    versionPackageJson: Joi.string()
      .pattern(
        /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
        "projects_valid_version_package_json"
      )
      .max(20),
    nameDocumentation: Joi.string().max(200).required(),
    versionDocumentation: Joi.string()
      .pattern(
        /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
        "projects_valid_version_documentation"
      )
      .max(20),
    createdAt: Joi.date().required().description("Es tipo timestamp"),
    updatedAt: Joi.date().required().description("Es tipo timestamp"),
  }).label("gnr_projects"),
};
