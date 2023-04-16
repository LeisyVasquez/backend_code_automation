'use strict'

module.exports = class  {
  constructor(id, descripcion, name, license, name_repository, url_repository, name_branch_repository, name_database, host_database, port_database, name_user_dba, password_user_dba, version_package_json, name_documentation, version_documentation, created_at, update_at) {
    this.id = id;
    this.descripcion = descripcion;
    this.name = name;
    this.license = license;
    this.name_repository = name_repository;
    this.url_repository = url_repository;
    this.name_branch_repository = name_branch_repository;
    this.name_database = name_database;
    this.host_database = host_database;
    this.port_database = port_database;
    this.name_user_dba = name_user_dba;
    this.password_user_dba = password_user_dba;
    this.version_package_json = version_package_json;
    this.name_documentation = name_documentation;
    this.version_documentation = version_documentation;
    this.created_at = created_at;
    this.update_at = update_at;
  }
}
