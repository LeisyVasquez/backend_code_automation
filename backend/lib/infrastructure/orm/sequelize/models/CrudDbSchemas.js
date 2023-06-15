const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crud_db_schemas', {
    project_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'gnr_projects',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(63),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'crud_db_schemas',
    schema: 'crud',
    timestamps: false,
    indexes: [
      {
        name: "db_schemas_pk",
        unique: true,
        fields: [
          { name: "project_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
