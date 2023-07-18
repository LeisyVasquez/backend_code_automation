"use strict";

const DbHosts = require("../../domain/gnr_db_hosts/db_hosts");
const DbHostsRepository = require("../../domain/gnr_db_hosts/db_hosts_repository");

const { gnr_db_hosts } = require("../orm/sequelize/relational_models");

const {
  convertCamelToSnakeCase,
} = require("../../application/utilities/general_functions");

module.exports = class extends DbHostsRepository {
  async persist(domain_db_hosts) {
    try {
      const { url } = domain_db_hosts;
      const seqCreateDbHosts = await gnr_db_hosts.create({
        url
      });
      return new DbHosts(
        seqCreateDbHosts.id,
        seqCreateDbHosts.url,
        seqCreateDbHosts.created_at,
        seqCreateDbHosts.updated_at
      );
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getByFilter(filter) {
    try {
      filter = convertCamelToSnakeCase(filter);
      const seqGetDbHosts = await gnr_db_hosts.findAll({
        where: filter,
      });
      if (seqGetDbHosts.length > 0) {
        return seqGetDbHosts.map((dbHost) => {
          return new DbHosts(
            dbHost.id,
            dbHost.url,
            dbHost.created_at,
            dbHost.updated_at
          );
        });
      } else return null;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async find() {
    try {
      const seqGetDbHosts = await gnr_db_hosts.findAll();
      if (seqGetDbHosts.length > 0) {
        return seqGetDbHosts.map((dbHost) => {
          return new DbHosts(
            dbHost.id,
            dbHost.url,
            dbHost.created_at,
            dbHost.updated_at
          );
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
      await gnr_db_hosts.update(fields, {
        where: { id },
      });
      const [seqDbHostsAfter] = await this.getByFilter({ id });
      return seqDbHostsAfter;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async remove(id) {
    try {
      await gnr_db_hosts.destroy({
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
