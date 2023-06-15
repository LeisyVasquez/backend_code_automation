const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crud_tables', {
    project_id_schema: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crud_db_schemas',
        key: 'project_id'
      }
    },
    name_schema: {
      type: DataTypes.STRING(63),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crud_db_schemas',
        key: 'project_id'
      }
    },
    name: {
      type: DataTypes.STRING(63),
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'crud_tables',
    schema: 'crud',
    hasTrigger: true,
    timestamps: true,
    indexes: [
      {
        name: "tables_pk",
        unique: true,
        fields: [
          { name: "project_id_schema" },
          { name: "name_schema" },
          { name: "name" },
        ]
      },
    ]
  });
};
