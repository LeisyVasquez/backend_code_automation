"use strict";

module.exports = async (condition, { gnrDbHostsRepository }) => {
  return await gnrDbHostsRepository.getByFilter(condition);
};
