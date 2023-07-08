"use strict";

const Joi = require("joi");
const gnrDbPortsController = require("../controllers/gnr_db_ports_controller");
const {
  fetchGeneralResponseStatusCodes,
} = require("../../application/utilities/general_functions");
const {
  responseIdNotFoundScheme,
  responseUniqueViolatedScheme,
  responseCannotBeDeletedScheme,
} = require("../../application/utilities/schemes/general");
const { gnrDbPortsScheme } = require("../../application/utilities/schemes/gnr");

module.exports = {
  name: "gnr_db_ports",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "POST",
        path: "/gnr_db_ports",
        handler: gnrDbPortsController.create,
        options: {
          //auth: 'public',
          description: "Create db_port",
          tags: ["api", "Init project"],
          validate: {
            payload: Joi.object({
              number: Joi.number().integer().min(1).max(65534).required(),
            }).label("gnr_db_ports_create_payload_post"),
          },
          plugins: {
            "hapi-swagger": {
              responses: {
                201: {
                  description: "db_port successfully created",
                  schema: gnrDbPortsScheme,
                },
                484: {
                  description: "There is already a port with this number",
                  scheme: responseUniqueViolatedScheme(484),
                },
                ...fetchGeneralResponseStatusCodes(),
              },
            },
          },
        },
      },
      {
        method: "GET",
        path: "/gnr_db_ports",
        handler: gnrDbPortsController.find,
        options: {
          //auth: 'public',
          description: "Get db_ports",
          tags: ["api", "Init project"],
          plugins: {
            "hapi-swagger": {
              responses: {
                200: {
                  description: "db_ports successfully obtained",
                  schema: Joi.array()
                    .items(gnrDbPortsScheme)
                    .label("gnr_db_ports_find_response_200"),
                },
                ...fetchGeneralResponseStatusCodes(),
              },
            },
          },
        },
      },
      {
        method: "DELETE",
        path: "/gnr_db_ports/{id}",
        handler: gnrDbPortsController.delete,
        options: {
          //auth: 'public',
          description: "Delete db_port",
          tags: ["api", "Init project"],
          validate: {
            params: Joi.object({
              id: Joi.number().integer().max(32767).required(),
            }).label("gnr_db_ports_delete_params_delete"),
          },
          plugins: {
            "hapi-swagger": {
              responses: {
                200: {
                  description: "db_port deleted",
                },
                432: {
                  description: "port id not exist",
                  schema: responseIdNotFoundScheme(432),
                },
                441: {
                  description:
                    "The port is already associated with a project and therefore cannot be deleted.",
                  schema: responseCannotBeDeletedScheme(441),
                },
                ...fetchGeneralResponseStatusCodes(),
              },
            },
          },
        },
      },
    ]);
  },
};
