"use strict";

const DbPort = require("../../domain/gnr_db_ports/db_port");
const DbPortRepository = require("../../domain/gnr_db_ports/db_port_repository");

const { gnr_db_ports } = require("../orm/sequelize/relational_models");

const {
  convertCamelToSnakeCase,
} = require("../../application/utilities/general_functions");

module.exports = class extends DbPortRepository {
  async persist(domain_db_port) {
    try {
      const { number } = convertCamelToSnakeCase(domain_db_port);

      const seqCreateDbPort = await gnr_db_ports.create({
        number,
      });
      return new DbPort(seqCreateDbPort.id, seqCreateDbPort.number);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getByFilter(filter) {
    try {
      filter = convertCamelToSnakeCase(filter);
      const seqGetDbPorts = await gnr_db_ports.findAll({
        where: filter,
      });
      if (seqGetDbPorts.length > 0) {
        return seqGetDbPorts.map((dbPort) => {
          return new DbPort(dbPort.id, dbPort.number);
        });
      } else return null;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async find() {
    try {
      const seqGetDbPorts = await gnr_db_ports.findAll();
      if (seqGetDbPorts.length > 0) {
        return seqGetDbPorts.map((dbPort) => {
          return new DbPort(dbPort.id, dbPort.number);
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
      await gnr_db_ports.update(fields, {
        where: { id },
      });
      const [seqDbPortAfter] = await this.getByFilter({ id });
      return seqDbPortAfter;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async remove(id) {
    try {
      await gnr_db_ports.destroy({
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
