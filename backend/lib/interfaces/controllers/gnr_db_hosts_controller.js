"use strict";

const Boom = require("@hapi/boom");
const createDbHosts = require("../../application/use_cases/init_project/create_db_hosts");
const listDbHosts = require("../../application/use_cases/init_project/list_db_hosts");
const deleteDbHosts = require("../../application/use_cases/init_project/delete_db_hosts");

module.exports = {
  async create(request, h) {
    //Context
    const serviceLocator = request.server.app.serviceLocator;

    //Input
    const { url } = request.payload;

    //Treatment
    const dbHosts = await createDbHosts(url, serviceLocator);

    //Output
    if (!dbHosts) return new Boom.Boom(undefined, { statusCode: 503 });
    if (dbHosts === 484)
      return new Boom.Boom(
        "The constraint of a unique field is being violated",
        { statusCode: dbHosts }
      );
    return h
      .response(serviceLocator.gnrDbHostsSerializer.serialize(dbHosts))
      .code(201);
  },

  async find(request, h) {
    //Context
    const serviceLocator = request.server.app.serviceLocator;

    //Treatment
    const dbHosts = await listDbHosts(serviceLocator);

    //Output
    if (dbHosts === null) return h.response().code(204);
    if (!dbHosts) return new Boom.Boom(undefined, { statusCode: 503 });

    return h
      .response(serviceLocator.gnrDbHostsSerializer.serialize(dbHosts))
      .code(200);
  },

  async delete(request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    //Input
    const { id } = request.params;

    //Treatment
    const dbHosts = await deleteDbHosts(id, serviceLocator);

    //Output
    if (!dbHosts) return new Boom.Boom(undefined, { statusCode: 503 });
    if (dbHosts === 432)
      return new Boom.Boom("Id not found", { statusCode: 432 });

    return h.response("dbHosts Deleted").code(200);
  },
};
