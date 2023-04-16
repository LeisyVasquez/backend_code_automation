const sequelize = require('./sequelize')
const initModels = require('./models/init-models')

const {
    general_projects
} = initModels(sequelize)

module.exports = {
    general_projects
}
