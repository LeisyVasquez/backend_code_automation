const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crud_uq_constr_fields', {
    project_id_table_field: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crud_table_fields',
        key: 'project_id_table'
      },
      unique: "uq_constr_fields_tbl_schemas_un"
    },
    name_schema_field: {
      type: DataTypes.STRING(63),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crud_table_fields',
        key: 'project_id_table'
      },
      unique: "uq_constr_fields_tbl_schemas_un"
    },
    name_table_field: {
      type: DataTypes.STRING(63),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crud_table_fields',
        key: 'project_id_table'
      },
      unique: "uq_constr_fields_tbl_schemas_un"
    },
    name_field: {
      type: DataTypes.STRING(63),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crud_table_fields',
        key: 'project_id_table'
      }
    },
    constr_uq_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crud_constr_uq',
        key: 'id'
      },
      unique: "uq_constr_fields_tbl_schemas_un"
    }
  }, {
    sequelize,
    tableName: 'crud_uq_constr_fields',
    schema: 'crud',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "uq_constr_fields_pk",
        unique: true,
        fields: [
          { name: "project_id_table_field" },
          { name: "name_schema_field" },
          { name: "name_table_field" },
          { name: "name_field" },
          { name: "constr_uq_id" },
        ]
      },
      {
        name: "uq_constr_fields_tbl_schemas_un",
        unique: true,
        fields: [
          { name: "constr_uq_id" },
          { name: "name_table_field" },
          { name: "name_schema_field" },
          { name: "project_id_table_field" },
        ]
      },
    ]
  });
};
