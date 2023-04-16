'use strict'

module.exports = async ({ publicGeneralProjectsRepository }) => {
  return await publicGeneralProjectsRepository.find()
}
