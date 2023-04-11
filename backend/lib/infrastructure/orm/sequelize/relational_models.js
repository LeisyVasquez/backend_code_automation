const sequelize = require('./sequelize')
const initModels = require('./models/init-models')

const {
    public_tests
} = initModels(sequelize)

module.exports = {
    public_tests
}
