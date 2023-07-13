const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_status_codes', {
    id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      primaryKey: true
    },
    code: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      unique: "status_codes_code_un"
    }
  }, {
    sequelize,
    tableName: 'doc_status_codes',
    schema: 'doc',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "status_codes_code_un",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "status_codes_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
