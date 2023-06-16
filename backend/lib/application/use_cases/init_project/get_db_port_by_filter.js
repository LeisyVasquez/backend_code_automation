"use strict";

module.exports = async (condition, { gnrDbPortsRepository }) => {
  return await gnrDbPortsRepository.getByFilter(condition);
};
