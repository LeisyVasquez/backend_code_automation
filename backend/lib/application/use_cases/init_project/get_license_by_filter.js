"use strict";

module.exports = async (condition, { gnrLicensesRepository }) => {
  return await gnrLicensesRepository.getByFilter(condition);
};
