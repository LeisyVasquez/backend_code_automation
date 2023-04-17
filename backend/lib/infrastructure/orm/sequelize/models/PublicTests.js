const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('public_tests', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campo1: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    campo2: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'public_tests',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "public_tests_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
