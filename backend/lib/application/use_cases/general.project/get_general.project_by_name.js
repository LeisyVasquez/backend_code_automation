'use strict'

module.exports = async (name, { publicGeneralProjectsRepository }) => {
  return await publicGeneralProjectsRepository.getByFilter({
    name
  })
}
