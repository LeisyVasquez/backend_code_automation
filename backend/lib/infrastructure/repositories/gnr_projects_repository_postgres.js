"use strict";

const Project = require("../../domain/gnr_projects/project");
const ProjectRepository = require("../../domain/gnr_projects/project_repository");

const { gnr_projects } = require("../orm/sequelize/relational_models");

const {
  convertCamelToSnakeCase,
} = require("../../application/utilities/general_functions");

module.exports = class extends ProjectRepository {
  async persist(domain_project) {
    try {
      const {
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
      } = convertCamelToSnakeCase(domain_project);

      const seqCreateProject = await gnr_projects.create({
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
      });
      return new Project(
        seqCreateProject.id,
        seqCreateProject.description,
        seqCreateProject.name,
        seqCreateProject.license_id,
        seqCreateProject.name_repository,
        seqCreateProject.url_repository,
        seqCreateProject.name_branch_repository,
        seqCreateProject.name_database,
        seqCreateProject.db_port_id,
        seqCreateProject.db_host_id,
        seqCreateProject.name_user_dba,
        seqCreateProject.password_user_dba,
        seqCreateProject.version_package_json,
        seqCreateProject.name_documentation,
        seqCreateProject.version_documentation,
        seqCreateProject.created_at,
        seqCreateProject.updated_at
      );
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getByFilter(filter) {
    try {
      filter = convertCamelToSnakeCase(filter);
      const seqGetProjects = await gnr_projects.findAll({
        where: filter,
      });
      if (seqGetProjects.length > 0) {
        return seqGetProjects.map((project) => {
          return new Project(
            project.id,
            project.description,
            project.name,
            project.license_id,
            project.name_repository,
            project.url_repository,
            project.name_branch_repository,
            project.name_database,
            project.db_port_id,
            project.db_host_id,
            project.name_user_dba,
            project.password_user_dba,
            project.version_package_json,
            project.name_documentation,
            project.version_documentation,
            project.created_at,
            project.updated_at
          );
        });
      } else return null;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async find() {
    try {
      const seqGetProjects = await gnr_projects.findAll();
      if (seqGetProjects.length > 0) {
        return seqGetProjects.map((project) => {
          return new Project(
            project.id,
            project.description,
            project.name,
            project.license_id,
            project.name_repository,
            project.url_repository,
            project.name_branch_repository,
            project.name_database,
            project.db_port_id,
            project.db_host_id,
            project.name_user_dba,
            project.password_user_dba,
            project.version_package_json,
            project.name_documentation,
            project.version_documentation,
            project.created_at,
            project.updated_at
          );
        });
      } else return null;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async update(id, fields) {
    try {
      fields = convertCamelToSnakeCase(fields);
      await gnr_projects.update(fields, {
        where: { id },
      });
      const [seqProjectAfter] = await this.getByFilter({ id });
      return seqProjectAfter;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async remove(id) {
    try {
      await gnr_projects.destroy({
        where: {
          id,
        },
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
};
