const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('general_projects', {
    id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "general_projects_name_key"
    },
    license: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    name_repository: {
      type: DataTypes.STRING(214),
      allowNull: false,
      unique: "general_projects_name_repository_key"
    },
    url_repository: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    name_branch_repository: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "general_projects_name_branch_repository_key"
    },
    name_database: {
      type: DataTypes.STRING(63),
      allowNull: false,
      unique: "general_projects_name_database_key"
    },
    host_database: {
      type: DataTypes.STRING(39),
      allowNull: false
    },
    port_database: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    name_user_dba: {
      type: DataTypes.STRING(63),
      allowNull: false
    },
    password_user_dba: {
      type: DataTypes.STRING(4000),
      allowNull: false
    },
    version_packaje_json: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    name_documentation: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    version_documentation: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    update_at: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'general_projects',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "general_projects_name_branch_repository_key",
        unique: true,
        fields: [
          { name: "name_branch_repository" },
        ]
      },
      {
        name: "general_projects_name_database_key",
        unique: true,
        fields: [
          { name: "name_database" },
        ]
      },
      {
        name: "general_projects_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "general_projects_name_repository_key",
        unique: true,
        fields: [
          { name: "name_repository" },
        ]
      },
      {
        name: "general_projects_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
