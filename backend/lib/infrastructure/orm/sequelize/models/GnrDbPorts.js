const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gnr_db_ports', {
    id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    number: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      unique: "db_ports_number_un"
    }
  }, {
    sequelize,
    tableName: 'gnr_db_ports',
    schema: 'gnr',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "db_ports_number_un",
        unique: true,
        fields: [
          { name: "number" },
        ]
      },
      {
        name: "db_ports_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
