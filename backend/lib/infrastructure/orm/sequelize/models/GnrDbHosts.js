const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "gnr_db_hosts",
    {
      id: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        primaryKey: true,
      },
      url: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        unique: "db_hosts_url_un",
      },
    },
    {
      sequelize,
      tableName: "gnr_db_hosts",
      schema: "gnr",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "db_hosts_pk",
          unique: true,
          fields: [{ name: "id" }],
        },
        {
          name: "db_hosts_url_un",
          unique: true,
          fields: [{ name: "url" }],
        },
      ],
    }
  );
};
