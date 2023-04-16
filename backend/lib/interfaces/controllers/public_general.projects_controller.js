"use strict";

const Boom = require("@hapi/boom");
const createGeneralProject = require("../../application/use_cases/general.project/create_general.project");
const getGeneralProjectByname = require("../../application/use_cases/general.project/get_general.project_by_name");
const listGeneralProjects = require("../../application/use_cases/general.project/list_general.project");

module.exports = {
  async create(request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const {
      id,
      name,
      description,
      license,
      nameRepository,
      urlRepository,
      nameBranchRepository,
      nameDatabase,
      hostDatabase,
      portDatabase,
      nameUserDba,
      passwordUserDba,
      versionPackageJson,
      nameDocumentation,
      versionDocumentation,
      created_at,
      updated_at,
    } = request.payload;

    // Treatment
    const GeneralProject = await createGeneralProject(
      id,
      name,
      description,
      license,
      nameRepository,
      urlRepository,
      nameBranchRepository,
      nameDatabase,
      hostDatabase,
      portDatabase,
      nameUserDba,
      passwordUserDba,
      versionPackageJson,
      nameDocumentation,
      versionDocumentation,
      created_at,
      updated_at,
      serviceLocator
    );

    // Output
    if (!GeneralProject) return new Boom.Boom(undefined, { statusCode: 503 });
    return h
      .response(
        serviceLocator.publicGeneralProjectSerializer.serialize(GeneralProject)
      )
      .code(201);
  },

  async getByname(request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { name } = request.params;

    // Treatment
    const GeneralProject = await getGeneralProjectByname(name, serviceLocator);

    // Output
    if (GeneralProject === null) return h.response().code(204);
    if (!GeneralProject) return new Boom.Boom(undefined, { statusCode: 503 });
    return h.response(
      serviceLocator.publicGeneralProjectSerializer.serialize(GeneralProject)
    );
  },

  async find(request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const GeneralProjects = await listGeneralProjects(serviceLocator);

    // Output
    if (GeneralProjects === null) return h.response().code(204);
    if (!GeneralProjects) return new Boom.Boom(undefined, { statusCode: 503 });
    return h.response(
      serviceLocator.publicGeneralProjectSerializer.serialize(GeneralProjects)
    );
  },
};
