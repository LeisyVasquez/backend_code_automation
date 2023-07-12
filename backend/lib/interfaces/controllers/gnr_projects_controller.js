"use strict";

const Boom = require("@hapi/boom");
const createProject = require("../../application/use_cases/init_project/create_project");
const listProject = require("../../application/use_cases/init_project/list_project");
const deleteProject = require("../../application/use_cases/init_project/delete_project");
const getProject = require("../../application/use_cases/init_project/get_project");

module.exports = {
  async create(request, h) {
    //Context
    const serviceLocator = request.server.app.serviceLocator;

    //Input
    const {
      description,
      name,
      licenseId,
      nameRepository,
      urlRepository,
      nameBranchRepository,
      nameDatabase,
      dbPortId,
      dbHostId,
      nameUserDba,
      passwordUserDba,
      versionPackageJson,
      nameDocumentation,
      versionDocumentation,
    } = request.payload;

    //Treatment
    const project = await createProject(
      description,
      name,
      licenseId,
      nameRepository,
      urlRepository,
      nameBranchRepository,
      nameDatabase,
      dbPortId,
      dbHostId,
      nameUserDba,
      passwordUserDba,
      versionPackageJson,
      nameDocumentation,
      versionDocumentation,
      serviceLocator
    );

    //Output
    if (!project) return new Boom.Boom(undefined, { statusCode: 503 });
    if (project === 432 || project === 433 || project === 434)
      return new Boom.Boom("Id not found", { statusCode: project });
    if (
      project === 484 ||
      project === 485 ||
      project === 486 ||
      project === 487 ||
      project === 488
    )
      return new Boom.Boom(
        "The constraint of a unique field is being violated.",
        { statusCode: project }
      );
    if (project === 489)
      return new Boom.Boom(
        "The project cannot be created or updated because it would violate a business rule",
        { statusCode: 489 }
      );
      
    return h
      .response(serviceLocator.gnrProjectsSerializer.serialize(project))
      .code(201);
  },

  async find(request, h) {
    //Context
    const serviceLocator = request.server.app.serviceLocator;

    //Treatment
    const projects = await listProject(serviceLocator);

    //Output
    if (projects === null) return h.response().code(204);
    if (!projects) return new Boom.Boom(undefined, { statusCode: 503 });

    return h
      .response(serviceLocator.gnrProjectsSerializer.serialize(projects))
      .code(200);
  },

  async delete(request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    //Input
    const { id } = request.params;

    //Treatment
    const project = await deleteProject(id, serviceLocator);

    //Output
    if (!project) return new Boom.Boom(undefined, { statusCode: 503 });
    if (project === 432)
      return new Boom.Boom("Id not found", { statusCode: 432 });

    return h.response("project Deleted").code(200);
  },

  async get(request, h) {
    //Context
    const serviceLocator = request.server.app.serviceLocator;

    //Input
    const { id } = request.params;

    //Treatment
    const project = await getProject(id, serviceLocator);

    //Output
    if (project === null) return h.response().code(204);
    if (!project) return new Boom.Boom(undefined, { statusCode: 503 });

    return h
      .response(serviceLocator.gnrProjectsSerializer.serialize(project))
      .code(200);
  },
};
