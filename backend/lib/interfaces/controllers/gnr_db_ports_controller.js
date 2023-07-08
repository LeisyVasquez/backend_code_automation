"use strict";

const Boom = require("@hapi/boom");
const createDbPort = require("../../application/use_cases/init_project/create_db_port");
const listDbPort = require("../../application/use_cases/init_project/list_db_port");
const deleteDbPort = require("../../application/use_cases/init_project/delete_db_port");

module.exports = {
  async create(request, h) {
    //Context
    const serviceLocator = request.server.app.serviceLocator;

    //Input
    const { number } = request.payload;

    //Treatment
    const dbPort = await createDbPort(number, serviceLocator);

    //Output
    if (!dbPort) return new Boom.Boom(undefined, { statusCode: 503 });
    if (dbPort === 484)
      return new Boom.Boom(
        "The constraint of a unique field is being violated.",
        { statusCode: 484 }
      );

    return h
      .response(serviceLocator.gnrDbPortsSerializer.serialize(dbPort))
      .code(201);
  },

  async find(request, h) {
    //Context
    const serviceLocator = request.server.app.serviceLocator;

    //Treatment
    const dbPort = await listDbPort(serviceLocator);

    //Output
    if (dbPort === null) return h.response().code(204);
    if (!dbPort) return new Boom.Boom(undefined, { statusCode: 503 });

    return h
      .response(serviceLocator.gnrDbPortsSerializer.serialize(dbPort))
      .code(200);
  },

  async delete(request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    //Input
    const { id } = request.params;

    //Treatment
    const dbPort = await deleteDbPort(id, serviceLocator);

    //Output
    if (!dbPort) return new Boom.Boom(undefined, { statusCode: 503 });
    if (dbPort === 432)
      return new Boom.Boom("Id not found", { statusCode: 432 });
   if (dbPort === 441)
     return new Boom.Boom("This element cannot be deleted.", {
       statusCode: 441,
     });
    return h.response("dbPort Deleted").code(200);
  },
};
