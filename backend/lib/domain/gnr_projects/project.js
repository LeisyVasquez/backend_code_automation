"use strict";

module.exports = class {
  constructor(
    id,
    description,
    name,
    license_id,
    name_repository,
    url_repository,
    name_branch_repository,
    name_database,
    db_port_id,
    db_host_id,
    name_user_dba,
    password_user_dba,
    version_package_json,
    name_documentation,
    version_documentation,
    created_at,
    updated_at
  ) {
    this.id = id;
    this.description = description;
    this.name = name;
    this.license_id = license_id;
    this.name_repository = name_repository;
    this.url_repository = url_repository;
    this.name_branch_repository = name_branch_repository;
    this.name_database = name_database;
    this.db_port_id = db_port_id;
    this.db_host_id = db_host_id;
    this.name_user_dba = name_user_dba;
    this.password_user_dba = password_user_dba;
    this.version_package_json = version_package_json;
    this.name_documentation = name_documentation;
    this.version_documentation = version_documentation;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
};
