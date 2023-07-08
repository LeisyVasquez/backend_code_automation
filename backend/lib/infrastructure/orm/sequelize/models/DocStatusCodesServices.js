const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "doc_status_codes_services",
    {
      project_id_service: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "doc_services",
          key: "route",
        },
      },
      method_id_service: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "doc_services",
          key: "route",
        },
      },
      route_service: {
        type: DataTypes.STRING(200),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "doc_services",
          key: "route",
        },
      },
      status_code_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "doc_status_codes",
          key: "id",
        },
      },
      description: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "doc_status_codes_services",
      schema: "doc",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "status_codes_services_pk",
          unique: true,
          fields: [
            { name: "project_id_service" },
            { name: "method_id_service" },
            { name: "route_service" },
            { name: "status_code_id" },
          ],
        },
      ],
    }
  );
};
