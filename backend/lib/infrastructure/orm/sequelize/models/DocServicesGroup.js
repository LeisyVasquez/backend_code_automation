const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_services_group', {
    project_id_service: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'doc_services',
        key: 'route'
      }
    },
    method_id_service: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'doc_services',
        key: 'route'
      }
    },
    route_service: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'doc_services',
        key: 'route'
      }
    },
    group_doc_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'doc_groups_doc',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'doc_services_group',
    schema: 'doc',
    hasTrigger: true,
    timestamps: true,
    indexes: [
      {
        name: "services_group_pk",
        unique: true,
        fields: [
          { name: "project_id_service" },
          { name: "method_id_service" },
          { name: "route_service" },
          { name: "group_doc_id" },
        ]
      },
    ]
  });
};
