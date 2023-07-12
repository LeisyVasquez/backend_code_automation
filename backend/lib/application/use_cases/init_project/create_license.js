"use strict";

const License = require("../../../domain/gnr_licenses/license");

module.exports = async (content, { gnrLicensesRepository }) => {
  const license = new License(null, content);
  return await gnrLicensesRepository.persist(license);
};
