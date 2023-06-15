const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_services', {
    project_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'gnr_projects',
        key: 'id'
      }
    },
    method_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'doc_methods',
        key: 'id'
      }
    },
    route: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    short_desc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    additional_desc: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'doc_services',
    schema: 'doc',
    hasTrigger: true,
    timestamps: true,
    indexes: [
      {
        name: "services_pk",
        unique: true,
        fields: [
          { name: "project_id" },
          { name: "method_id" },
          { name: "route" },
        ]
      },
    ]
  });
};
