"use strict";

const Joi = require("joi");
const gnrDbHostsController = require("../controllers/gnr_db_hosts_controller");
const {
  fetchGeneralResponseStatusCodes,
} = require("../../application/utilities/general_functions");
const {
  responseIdNotFoundScheme,
  responseUniqueViolatedScheme,
} = require("../../application/utilities/schemes/general");
const { gnrDbHostsScheme } = require("../../application/utilities/schemes/gnr");

module.exports = {
  name: "gnr_db_hosts",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "POST",
        path: "/gnr_db_hosts",
        handler: gnrDbHostsController.create,
        options: {
          //auth: 'public',
          description: "Create db_hosts",
          tags: ["api", "Init project"],
          validate: {
            payload: Joi.object({
              url: Joi.string()
                .pattern(
                  /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+\.[a-zA-Z]{2,}(\/.*)?$|^(([0-9]{1,3}\.){3}[0-9]{1,3})$|^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:([0-9A-Fa-f]{1,4})?))$/,
                  "db_hosts_valid_url"
                )
                .max(1000)
                .required(),
            }).label("gnr_db_hosts_create_payload_post"),
          },
          plugins: {
            "hapi-swagger": {
              responses: {
                201: {
                  description: "db_hosts successfully created",
                  schema: gnrDbHostsScheme,
                },
                484: {
                  description:
                    "There is already a host created with the same url",
                  schema: responseUniqueViolatedScheme(484),
                },
                ...fetchGeneralResponseStatusCodes(),
              },
            },
          },
        },
      },
      {
        method: "GET",
        path: "/gnr_db_hosts",
        handler: gnrDbHostsController.find,
        options: {
          //auth: 'public',
          description: "Get db_hosts",
          tags: ["api", "Init project"],
          plugins: {
            "hapi-swagger": {
              responses: {
                200: {
                  description: "db_hosts successfully obtained",
                  schema: Joi.array()
                    .items(gnrDbHostsScheme)
                    .label("gnr_db_hosts_find_response_200"),
                },
                ...fetchGeneralResponseStatusCodes(),
              },
            },
          },
        },
      },
      {
        method: "DELETE",
        path: "/gnr_db_hosts/{id}",
        handler: gnrDbHostsController.delete,
        options: {
          //auth: 'public',
          description: "Delete db_hosts",
          tags: ["api", "Init project"],
          validate: {
            params: Joi.object({
              id: Joi.number().integer().max(32767).required(),
            }).label("gnr_db_hosts_delete_params_delete"),
          },
          plugins: {
            "hapi-swagger": {
              responses: {
                200: {
                  description: "db_hosts deleted",
                },
                432: {
                  description: "host id not exist",
                  schema: responseIdNotFoundScheme(432),
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
