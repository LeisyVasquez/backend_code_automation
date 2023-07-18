"use strict";

module.exports = async ({ gnrLicensesRepository }) => {
  return await gnrLicensesRepository.find();
};
