"use strict";

module.exports = async (condition, { gnrProjectsRepository }) => {
  return await gnrProjectsRepository.getByFilter(condition);
};
