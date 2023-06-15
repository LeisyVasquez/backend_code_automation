var DataTypes = require("sequelize").DataTypes;
var _crud_constr_uq = require("./CrudConstrUq");
var _crud_db_schemas = require("./CrudDbSchemas");
var _crud_table_fields = require("./CrudTableFields");
var _crud_tables = require("./CrudTables");
var _crud_uq_constr_fields = require("./CrudUqConstrFields");
var _doc_groups_doc = require("./DocGroupsDoc");
var _doc_methods = require("./DocMethods");
var _doc_services = require("./DocServices");
var _doc_services_group = require("./DocServicesGroup");
var _doc_status_codes = require("./DocStatusCodes");
var _doc_status_codes_services = require("./DocStatusCodesServices");
var _gnr_db_hosts = require("./GnrDbHosts");
var _gnr_db_ports = require("./GnrDbPorts");
var _gnr_licenses = require("./GnrLicenses");
var _gnr_projects = require("./GnrProjects");

function initModels(sequelize) {
  var crud_constr_uq = _crud_constr_uq(sequelize, DataTypes);
  var crud_db_schemas = _crud_db_schemas(sequelize, DataTypes);
  var crud_table_fields = _crud_table_fields(sequelize, DataTypes);
  var crud_tables = _crud_tables(sequelize, DataTypes);
  var crud_uq_constr_fields = _crud_uq_constr_fields(sequelize, DataTypes);
  var doc_groups_doc = _doc_groups_doc(sequelize, DataTypes);
  var doc_methods = _doc_methods(sequelize, DataTypes);
  var doc_services = _doc_services(sequelize, DataTypes);
  var doc_services_group = _doc_services_group(sequelize, DataTypes);
  var doc_status_codes = _doc_status_codes(sequelize, DataTypes);
  var doc_status_codes_services = _doc_status_codes_services(sequelize, DataTypes);
  var gnr_db_hosts = _gnr_db_hosts(sequelize, DataTypes);
  var gnr_db_ports = _gnr_db_ports(sequelize, DataTypes);
  var gnr_licenses = _gnr_licenses(sequelize, DataTypes);
  var gnr_projects = _gnr_projects(sequelize, DataTypes);

  crud_db_schemas.belongsToMany(crud_db_schemas, { as: 'project_id_schema_crud_db_schemas', through: crud_tables, foreignKey: "name_schema", otherKey: "project_id_schema" });
  crud_db_schemas.belongsToMany(crud_db_schemas, { as: 'name_schema_crud_db_schemas', through: crud_tables, foreignKey: "project_id_schema", otherKey: "name_schema" });
  doc_methods.belongsToMany(gnr_projects, { as: 'project_id_gnr_projects', through: doc_services, foreignKey: "method_id", otherKey: "project_id" });
  gnr_projects.belongsToMany(doc_methods, { as: 'method_id_doc_methods', through: doc_services, foreignKey: "project_id", otherKey: "method_id" });
  crud_uq_constr_fields.belongsTo(crud_constr_uq, { as: "constr_uq", foreignKey: "constr_uq_id"});
  crud_constr_uq.hasMany(crud_uq_constr_fields, { as: "crud_uq_constr_fields", foreignKey: "constr_uq_id"});
  crud_tables.belongsTo(crud_db_schemas, { as: "name_schema_crud_db_schema", foreignKey: "name_schema"});
  crud_db_schemas.hasMany(crud_tables, { as: "crud_tables", foreignKey: "name_schema"});
  crud_tables.belongsTo(crud_db_schemas, { as: "project_id_schema_crud_db_schema", foreignKey: "project_id_schema"});
  crud_db_schemas.hasMany(crud_tables, { as: "project_id_schema_crud_tables", foreignKey: "project_id_schema"});
  crud_uq_constr_fields.belongsTo(crud_table_fields, { as: "name_field_crud_table_field", foreignKey: "name_field"});
  crud_table_fields.hasMany(crud_uq_constr_fields, { as: "crud_uq_constr_fields", foreignKey: "name_field"});
  crud_uq_constr_fields.belongsTo(crud_table_fields, { as: "name_schema_field_crud_table_field", foreignKey: "name_schema_field"});
  crud_table_fields.hasMany(crud_uq_constr_fields, { as: "name_schema_field_crud_uq_constr_fields", foreignKey: "name_schema_field"});
  crud_uq_constr_fields.belongsTo(crud_table_fields, { as: "name_table_field_crud_table_field", foreignKey: "name_table_field"});
  crud_table_fields.hasMany(crud_uq_constr_fields, { as: "name_table_field_crud_uq_constr_fields", foreignKey: "name_table_field"});
  crud_uq_constr_fields.belongsTo(crud_table_fields, { as: "project_id_table_field_crud_table_field", foreignKey: "project_id_table_field"});
  crud_table_fields.hasMany(crud_uq_constr_fields, { as: "project_id_table_field_crud_uq_constr_fields", foreignKey: "project_id_table_field"});
  crud_table_fields.belongsTo(crud_tables, { as: "name_schema_table_crud_table", foreignKey: "name_schema_table"});
  crud_tables.hasMany(crud_table_fields, { as: "crud_table_fields", foreignKey: "name_schema_table"});
  crud_table_fields.belongsTo(crud_tables, { as: "name_table_crud_table", foreignKey: "name_table"});
  crud_tables.hasMany(crud_table_fields, { as: "name_table_crud_table_fields", foreignKey: "name_table"});
  crud_table_fields.belongsTo(crud_tables, { as: "project_id_table_crud_table", foreignKey: "project_id_table"});
  crud_tables.hasMany(crud_table_fields, { as: "project_id_table_crud_table_fields", foreignKey: "project_id_table"});
  crud_db_schemas.belongsTo(gnr_projects, { as: "project", foreignKey: "project_id"});
  gnr_projects.hasMany(crud_db_schemas, { as: "crud_db_schemas", foreignKey: "project_id"});
  doc_services_group.belongsTo(doc_groups_doc, { as: "group_doc", foreignKey: "group_doc_id"});
  doc_groups_doc.hasMany(doc_services_group, { as: "doc_services_groups", foreignKey: "group_doc_id"});
  doc_services.belongsTo(doc_methods, { as: "method", foreignKey: "method_id"});
  doc_methods.hasMany(doc_services, { as: "doc_services", foreignKey: "method_id"});
  doc_services_group.belongsTo(doc_services, { as: "method_id_service_doc_service", foreignKey: "method_id_service"});
  doc_services.hasMany(doc_services_group, { as: "doc_services_groups", foreignKey: "method_id_service"});
  doc_services_group.belongsTo(doc_services, { as: "project_id_service_doc_service", foreignKey: "project_id_service"});
  doc_services.hasMany(doc_services_group, { as: "project_id_service_doc_services_groups", foreignKey: "project_id_service"});
  doc_services_group.belongsTo(doc_services, { as: "route_service_doc_service", foreignKey: "route_service"});
  doc_services.hasMany(doc_services_group, { as: "route_service_doc_services_groups", foreignKey: "route_service"});
  doc_status_codes_services.belongsTo(doc_services, { as: "method_id_service_doc_service", foreignKey: "method_id_service"});
  doc_services.hasMany(doc_status_codes_services, { as: "doc_status_codes_services", foreignKey: "method_id_service"});
  doc_status_codes_services.belongsTo(doc_services, { as: "project_id_service_doc_service", foreignKey: "project_id_service"});
  doc_services.hasMany(doc_status_codes_services, { as: "project_id_service_doc_status_codes_services", foreignKey: "project_id_service"});
  doc_status_codes_services.belongsTo(doc_services, { as: "route_service_doc_service", foreignKey: "route_service"});
  doc_services.hasMany(doc_status_codes_services, { as: "route_service_doc_status_codes_services", foreignKey: "route_service"});
  doc_status_codes_services.belongsTo(doc_status_codes, { as: "status_code", foreignKey: "status_code_id"});
  doc_status_codes.hasMany(doc_status_codes_services, { as: "doc_status_codes_services", foreignKey: "status_code_id"});
  doc_services.belongsTo(gnr_projects, { as: "project", foreignKey: "project_id"});
  gnr_projects.hasMany(doc_services, { as: "doc_services", foreignKey: "project_id"});
  gnr_projects.belongsTo(gnr_db_hosts, { as: "db_host", foreignKey: "db_host_id"});
  gnr_db_hosts.hasMany(gnr_projects, { as: "gnr_projects", foreignKey: "db_host_id"});
  gnr_projects.belongsTo(gnr_db_ports, { as: "db_port", foreignKey: "db_port_id"});
  gnr_db_ports.hasMany(gnr_projects, { as: "gnr_projects", foreignKey: "db_port_id"});
  gnr_projects.belongsTo(gnr_licenses, { as: "license", foreignKey: "license_id"});
  gnr_licenses.hasMany(gnr_projects, { as: "gnr_projects", foreignKey: "license_id"});

  return {
    crud_constr_uq,
    crud_db_schemas,
    crud_table_fields,
    crud_tables,
    crud_uq_constr_fields,
    doc_groups_doc,
    doc_methods,
    doc_services,
    doc_services_group,
    doc_status_codes,
    doc_status_codes_services,
    gnr_db_hosts,
    gnr_db_ports,
    gnr_licenses,
    gnr_projects,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
