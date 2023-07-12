const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_groups_doc', {
    id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "groups_doc_name_un"
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'doc_groups_doc',
    schema: 'doc',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "groups_doc_name_un",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "groups_doc_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
