'use strict'

module.exports = async ({ publicTestRepository }) => {
  return await publicTestRepository.find()
}
