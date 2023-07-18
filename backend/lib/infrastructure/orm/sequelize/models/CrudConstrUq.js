const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crud_constr_uq', {
    id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(63),
      allowNull: true,
      unique: "constr_uq_name_un"
    }
  }, {
    sequelize,
    tableName: 'crud_constr_uq',
    schema: 'crud',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "constr_uq_name_un",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "constr_uq_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
