'use strict'

module.exports = async (campo1, { publicTestRepository }) => {
  return await publicTestRepository.getByFilter({
    campo1
  })
}
