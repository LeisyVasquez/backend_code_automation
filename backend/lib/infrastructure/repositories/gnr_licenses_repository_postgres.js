"use strict";

const License = require("../../domain/gnr_licenses/license");
const LicenseRepository = require("../../domain/gnr_licenses/license_repository");

const { gnr_licenses } = require("../orm/sequelize/relational_models");

const {
  convertCamelToSnakeCase,
} = require("../../application/utilities/general_functions");

module.exports = class extends LicenseRepository {
  async persist(domain_license) {
    try {
      const { content } = convertCamelToSnakeCase(domain_license);

      const seqCreateLicense = await gnr_licenses.create({
        content,
      });
      return new License(seqCreateLicense.id, seqCreateLicense.content);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getByFilter(filter) {
    try {
      filter = convertCamelToSnakeCase(filter);
      const seqGetLicenses = await gnr_licenses.findAll({
        where: filter,
      });
      if (seqGetLicenses.length > 0) {
        return seqGetLicenses.map((license) => {
          return new License(license.id, license.content);
        });
      } else return null;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async find() {
    try {
      const seqGetLicenses = await gnr_licenses.findAll();
      if (seqGetLicenses.length > 0) {
        return seqGetLicenses.map((license) => {
          return new License(license.id, license.content);
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
      await gnr_licenses.update(fields, {
        where: { id },
      });
      const [seqLicenseAfter] = await this.getByFilter({ id });
      return seqLicenseAfter;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async remove(id) {
    try {
      await gnr_licenses.destroy({
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
