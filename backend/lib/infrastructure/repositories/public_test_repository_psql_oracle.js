'use strict'

const Test = require('../../domain/public_tests/test')
const TestRepository = require('../../domain/public_tests/test_repository')

const { public_tests } = require('../orm/sequelize/relational_models')

const {
  convertCamelToSnakeCase
} = require('../../application/utilities/general_functions')

module.exports = class extends TestRepository {
  async persist (domain) {
    try {
      const { campo1, campo2 } = convertCamelToSnakeCase(domain)
      const seqCreateTest = await public_tests.create({
        campo1,
        campo2
      })
      return new Test(
        seqCreateTest.id,
        seqCreateTest.campo1,
        seqCreateTest.campo2
      )
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async find () {
    try {
      const seqGetTest = await public_tests.findAll()
      if (seqGetTest.length > 0) {
        return seqGetTest.map(test => {
          return new Test(test.id, test.campo1, test.campo2)
        })
      } else return null
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async getByFilter (filter) {
    try {
      filter = convertCamelToSnakeCase(filter)
      const seqGetTest = await public_tests.findAll({
        where: filter
      })

      if (seqGetTest.length > 0) {
        return seqGetTest.map(test => {
          return new Test(test.id, test.campo1, test.campo2)
        })
      } else return null 
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async update (id, fields, condition) {
    try {
      const seqTestBefore = await this.getByFilter({ id })
      if (!seqTestBefore) return seqTestBefore
      fields = convertCamelToSnakeCase(fields)
      condition = convertCamelToSnakeCase(condition)
      condition.id = id
      await public_tests.update(fields, {
        where: condition
      })
      const [seqTestAfter] = await this.getByFilter({ id })
      return seqTestAfter
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async remove (id) {
    try {
      await public_tests.destroy({
        where: {
          id
        }
      })
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }
}
