const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gnr_licenses', {
    id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(4000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gnr_licenses',
    schema: 'gnr',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "licenses_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
