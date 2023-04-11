'use strict'

const Test = require('../../../domain/public_tests/test')

module.exports = async (campo1, campo2, { publicTestRepository }) => {
  const test = new Test(null, campo1, campo2)
  return await publicTestRepository.persist(test)
}
