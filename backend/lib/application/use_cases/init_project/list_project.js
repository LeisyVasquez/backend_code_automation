"use strict";

module.exports = async ({ gnrProjectsRepository }) => {
  return await gnrProjectsRepository.find();
};
