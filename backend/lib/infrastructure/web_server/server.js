"use strict";

const Hapi = require("@hapi/hapi");
const Blipp = require("blipp");
const HapiSwagger = require("hapi-swagger");
//Complementos de HapiSwagger
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const Package = require("../../../package.json");
const fs = require("fs");

const createServer = async () => {
  let server = {};
  let options = {
    port: process.env.PORT || 3000,
    routes: {
      cors: {
        origin: ["*"],
        headers: [
          "Accept",
          "Authorization",
          "Content-Type",
          "time",
          "code",
          "public-signature",
        ],
      },
    },
  };
  if (process.env.TRAFFIC_MODE === "https") {
    // Certificado http
    const tls = {
      // key: fs.readFileSync('/etc/nginx/SSL/dev_drimos.ai.key'),
      // cert: fs.readFileSync('/etc/nginx/SSL/dev_drimos.ai.chained.crt'),
      // passphrase: ''
    };
    server = Hapi.server({
      ...options,
      tls,
    });
  } else {
    server = Hapi.server(options);
  }

  //Se configura prefijo de rutas
  server.realm.modifiers.route.prefix = "/api";

  // Register vendors plugins
  await server.register([
    Inert,
    Vision,
    {
      plugin: Blipp,
      options: { showAuth: true },
    },
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: "Backend Code Automation",
          version: Package.version,
        },
        grouping: "tags",
        tags: [
          {
            name: "Init project",
            description:
              "Services required for automated project initialization",
          },
        ],
      },
    },
  ]);

  // Register custom plugins
  await server.register([
    require("./security"),
    require('../../interfaces/routes/gnr_db_ports'),
		require('../../interfaces/routes/gnr_db_hosts'),
		require('../../interfaces/routes/gnr_licenses'),
		//$1
  ]);

  server.app.serviceLocator = require("../config/service_locator");

  return server;
};

module.exports = createServer;
