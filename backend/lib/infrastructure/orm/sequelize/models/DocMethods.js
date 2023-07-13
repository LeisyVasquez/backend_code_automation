const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_methods', {
    id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "methods_name_un"
    }
  }, {
    sequelize,
    tableName: 'doc_methods',
    schema: 'doc',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "methods_name_un",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "methods_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
