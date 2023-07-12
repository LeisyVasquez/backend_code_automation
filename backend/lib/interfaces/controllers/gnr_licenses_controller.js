"use strict";

const Boom = require("@hapi/boom");
const createLicense = require("../../application/use_cases/init_project/create_license");
const listLicense = require("../../application/use_cases/init_project/list_license");
const deleteLicense = require("../../application/use_cases/init_project/delete_license");

module.exports = {
  async create(request, h) {
    //Context
    const serviceLocator = request.server.app.serviceLocator;

    //Input
    const { content } = request.payload;

    //Treatment
    const license = await createLicense(content, serviceLocator);

    //Output
    if (!license) return new Boom.Boom(undefined, { statusCode: 503 });

    return h
      .response(serviceLocator.gnrLicensesSerializer.serialize(license))
      .code(201);
  },

  async find(request, h) {
    //Context
    const serviceLocator = request.server.app.serviceLocator;

    //Treatment
    const license = await listLicense(serviceLocator);

    //Output
    if (license === null) return h.response().code(204);
    if (!license) return new Boom.Boom(undefined, { statusCode: 503 });

    return h
      .response(serviceLocator.gnrLicensesSerializer.serialize(license))
      .code(200);
  },

  async delete(request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    //Input
    const { id } = request.params;

    //Treatment
    const license = await deleteLicense(id, serviceLocator);

    //Output
    if (!license) return new Boom.Boom(undefined, { statusCode: 503 });
    if (license === 432)
      return new Boom.Boom("Id not found", { statusCode: 432 });

    return h.response("license Deleted").code(200);
  },
};
