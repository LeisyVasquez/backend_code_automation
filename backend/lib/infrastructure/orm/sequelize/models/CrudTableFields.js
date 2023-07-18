const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crud_table_fields', {
    project_id_table: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crud_tables',
        key: 'project_id_schema'
      }
    },
    name_schema_table: {
      type: DataTypes.STRING(63),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crud_tables',
        key: 'project_id_schema'
      }
    },
    name_table: {
      type: DataTypes.STRING(63),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crud_tables',
        key: 'project_id_schema'
      }
    },
    name: {
      type: DataTypes.STRING(63),
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    type_data_specification: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    is_primary_key: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_auto_increment: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_required: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_private_field: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'crud_table_fields',
    schema: 'crud',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "table_fields_pk",
        unique: true,
        fields: [
          { name: "project_id_table" },
          { name: "name_schema_table" },
          { name: "name_table" },
          { name: "name" },
        ]
      },
    ]
  });
};
