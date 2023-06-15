const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gnr_projects', {
    id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: "projects_name_un"
    },
    license_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'gnr_licenses',
        key: 'id'
      }
    },
    name_repository: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "projects_name_repository_un"
    },
    url_repository: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      unique: "projects_url_repository_un"
    },
    name_branch_repository: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    name_database: {
      type: DataTypes.STRING(63),
      allowNull: true,
      unique: "projects_name_database_un"
    },
    db_port_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'gnr_db_ports',
        key: 'id'
      }
    },
    db_host_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'gnr_db_hosts',
        key: 'id'
      }
    },
    name_user_dba: {
      type: DataTypes.STRING(63),
      allowNull: true,
      unique: "projects_name_user_dba_un"
    },
    password_user_dba: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    version_package_json: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    name_documentation: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    version_documentation: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gnr_projects',
    schema: 'gnr',
    hasTrigger: true,
    timestamps: true,
    indexes: [
      {
        name: "projects_name_database_un",
        unique: true,
        fields: [
          { name: "name_database" },
        ]
      },
      {
        name: "projects_name_repository_un",
        unique: true,
        fields: [
          { name: "name_repository" },
        ]
      },
      {
        name: "projects_name_un",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "projects_name_user_dba_un",
        unique: true,
        fields: [
          { name: "name_user_dba" },
        ]
      },
      {
        name: "projects_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "projects_url_repository_un",
        unique: true,
        fields: [
          { name: "url_repository" },
        ]
      },
    ]
  });
};
