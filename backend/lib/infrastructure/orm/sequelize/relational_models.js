const sequelize = require("./sequelize");
const initModels = require("./models/init-models");

const {
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
} = initModels(sequelize);

module.exports = {
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
