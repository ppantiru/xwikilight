const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activitystream_events', {
    ase_eventid: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true
    },
    ase_requestid: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    ase_stream: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ase_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    ase_priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ase_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ase_application: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ase_user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ase_wiki: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ase_space: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ase_page: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ase_hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ase_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ase_title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ase_body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ase_version: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ase_param1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ase_param2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ase_param3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ase_param4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ase_param5: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'activitystream_events',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ase_eventid" },
        ]
      },
      {
        name: "EVENT_REQUESTID",
        using: "BTREE",
        fields: [
          { name: "ase_requestid" },
        ]
      },
      {
        name: "EVENT_STREAM",
        using: "BTREE",
        fields: [
          { name: "ase_stream" },
        ]
      },
      {
        name: "EVENT_DATE",
        using: "BTREE",
        fields: [
          { name: "ase_date" },
        ]
      },
      {
        name: "EVENT_PRIORITY",
        using: "BTREE",
        fields: [
          { name: "ase_priority" },
        ]
      },
      {
        name: "EVENT_TYPE",
        using: "BTREE",
        fields: [
          { name: "ase_type" },
        ]
      },
      {
        name: "EVENT_APP",
        using: "BTREE",
        fields: [
          { name: "ase_application" },
        ]
      },
      {
        name: "EVENT_USER",
        using: "BTREE",
        fields: [
          { name: "ase_user" },
        ]
      },
      {
        name: "EVENT_WIKI",
        using: "BTREE",
        fields: [
          { name: "ase_wiki" },
        ]
      },
      {
        name: "EVENT_SPACE",
        using: "BTREE",
        fields: [
          { name: "ase_space" },
        ]
      },
      {
        name: "EVENT_PAGE",
        using: "BTREE",
        fields: [
          { name: "ase_page" },
        ]
      },
      {
        name: "EVENT_HIDDEN",
        using: "BTREE",
        fields: [
          { name: "ase_hidden" },
        ]
      },
    ]
  });
};
