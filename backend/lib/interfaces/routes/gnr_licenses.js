"use strict";

const Joi = require("joi");
const gnrLicensesController = require("../controllers/gnr_licenses_controller");
const {
  fetchGeneralResponseStatusCodes,
} = require("../../application/utilities/general_functions");
const {
  responseIdNotFoundScheme,
} = require("../../application/utilities/schemes/general");
const { gnrLicenses } = require("../../application/utilities/schemes/gnr");

module.exports = {
  name: "gnr_licenses",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "POST",
        path: "/gnr_licenses",
        handler: gnrLicensesController.create,
        options: {
          //auth: 'public',
          description: "Create license",
          tags: ["api"],
          validate: {
            payload: Joi.object({
              content: Joi.string().max(4000).required(),
            }).label("gnr_licenses_create_payload_post"),
          },
          plugins: {
            "hapi-swagger": {
              responses: {
                201: {
                  description: "license successfully created",
                  schema: gnrLicenses,
                },
                ...fetchGeneralResponseStatusCodes(),
              },
            },
          },
        },
      },
      {
        method: "GET",
        path: "/gnr_licenses",
        handler: gnrLicensesController.find,
        options: {
          //auth: 'public',
          description: "Get licenses",
          tags: ["api"],
          plugins: {
            "hapi-swagger": {
              responses: {
                200: {
                  description: "licenses successfully obtained",
                  schema: Joi.array()
                    .items(gnrLicenses)
                    .label("gnr_licenses_find_response_200"),
                },
                ...fetchGeneralResponseStatusCodes(),
              },
            },
          },
        },
      },
      {
        method: "DELETE",
        path: "/gnr_licenses/{id}",
        handler: gnrLicensesController.delete,
        options: {
          //auth: 'public',
          description: "Delete license",
          tags: ["api"],
          validate: {
            params: Joi.object({
              id: Joi.number().integer().max(32767).required(),
            }).label("gnr_licenses_delete_params_delete"),
          },
          plugins: {
            "hapi-swagger": {
              responses: {
                200: {
                  description: "license deleted",
                },
                432: {
                  description: "license id not exist",
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
