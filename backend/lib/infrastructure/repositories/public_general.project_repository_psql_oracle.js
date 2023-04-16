'use strict';

const General_projects = require('../../domain/public_general.projects/general.projects');
const General_projectsRepository = require('../../domain/public_general.projects/general.project_repository');

const { general_projects } = require('../orm/sequelize/relational_models');

const { convertCamelToSnakeCase } = require('../../application/utilities/general_functions');

module.exports = class extends General_projectsRepository {
  async persist(domain) {
    try {
      const { descripcion, name, license, name_repository, url_repository, name_branch_repository, name_database, host_database, port_database, name_user_dba, password_user_dba, version_packaje_json, name_documentation, version_documentation } = convertCamelToSnakeCase(domain);
      const seqCreateGeneral_projects = await general_projects.create({
        descripcion,
        name,
        license,
        name_repository,
        url_repository,
        name_branch_repository,
        name_database,
        host_database,
        port_database,
        name_user_dba,
        password_user_dba,
        version_packaje_json,
        name_documentation,
        version_documentation,
        created_at: new Date(),
        update_at: new Date(),
      });
      return new General_projects(
        seqCreateGeneral_projects.id,
        seqCreateGeneral_projects.descripcion,
        seqCreateGeneral_projects.name,
        seqCreateGeneral_projects.license,
        seqCreateGeneral_projects.name_repository,
        seqCreateGeneral_projects.url_repository,
        seqCreateGeneral_projects.name_branch_repository,
        seqCreateGeneral_projects.name_database,
        seqCreateGeneral_projects.host_database,
        seqCreateGeneral_projects.port_database,
        seqCreateGeneral_projects.name_user_dba,
        seqCreateGeneral_projects.password_user_dba,
        seqCreateGeneral_projects.version_packaje_json,
        seqCreateGeneral_projects.name_documentation,
        seqCreateGeneral_projects.version_documentation,
        seqCreateGeneral_projects.created_at,
        seqCreateGeneral_projects.update_at
      );
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async find() {
    try {
      const seqGetGeneral_projects = await general_projects.findAll();
      if (seqGetGeneral_projects.length > 0) {
        return seqGetGeneral_projects.map((General_projects) => {
          return new General_projects(
            General_projects.id,
            General_projects.descripcion,
            General_projects.name,
            General_projects.license,
            General_projects.name_repository,
            General_projects.url_repository,
            General_projects.name_branch_repository,
            General_projects.name_database,
            General_projects.host_database,
            General_projects.port_database,
            General_projects.name_user_dba,
            General_projects.password_user_dba,
            General_projects.version_packaje_json,
            General_projects.name_documentation,
            General_projects.version_documentation,
            General_projects.created_at,
            General_projects.update_at
          );
        });
      } else return null;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getByFilter(filter) {
    try {
      filter = convertCamelToSnakeCase(filter);
      const seqGetGeneral_projects = await general_projects.findAll({
        where: filter,
      });
      if (seqGetGeneral_projects.length > 0) {
        return seqGetGeneral_projects.map((General_projects) => {
          return new General_projects(
            General_projects.id,
            General_projects.descripcion,
            General_projects.name,
            General_projects.license,
            General_projects.name_repository,
            General_projects.url_repository,
            General_projects.name_branch_repository,
            General_projects.name_database,
            General_projects.host_database,
            General_projects.port_database,
            General_projects.name_user_dba,
            General_projects.password_user_dba,
            General_projects.version_packaje_json,
            General_projects.name_documentation,
            General_projects.version_documentation,
            General_projects.created_at,
            General_projects.update_at
          );
        });
    } else return null;
  } catch (err) {
    console.log(err);
    return false;
  }
}
}