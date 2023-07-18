"use strict";

module.exports = async ({ gnrDbHostsRepository }) => {
  return await gnrDbHostsRepository.find();
};
