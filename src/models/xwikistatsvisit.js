const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikistatsvisit', {
    XWV_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWV_NUMBER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWV_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWV_CLASSNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWV_IP: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWV_USER_AGENT: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    XWV_COOKIE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    XWV_UNIQUE_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWV_PAGE_VIEWS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWV_PAGE_SAVES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWV_DOWNLOADS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWV_START_DATE: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    XWV_END_DATE: {
      type: DataTypes.DATE(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikistatsvisit',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWV_ID" },
        ]
      },
      {
        name: "XWVS_NAME",
        using: "BTREE",
        fields: [
          { name: "XWV_NAME" },
        ]
      },
      {
        name: "XWVS_IP",
        using: "BTREE",
        fields: [
          { name: "XWV_IP" },
        ]
      },
      {
        name: "XWVS_UNIQUE_ID",
        using: "BTREE",
        fields: [
          { name: "XWV_UNIQUE_ID" },
        ]
      },
      {
        name: "XWVS_PAGE_VIEWS",
        using: "BTREE",
        fields: [
          { name: "XWV_PAGE_VIEWS" },
        ]
      },
      {
        name: "XWVS_PAGE_SAVES",
        using: "BTREE",
        fields: [
          { name: "XWV_PAGE_SAVES" },
        ]
      },
      {
        name: "XWVS_DOWNLOADS",
        using: "BTREE",
        fields: [
          { name: "XWV_DOWNLOADS" },
        ]
      },
      {
        name: "XWVS_START_DATE",
        using: "BTREE",
        fields: [
          { name: "XWV_START_DATE" },
        ]
      },
      {
        name: "XWVS_END_DATE",
        using: "BTREE",
        fields: [
          { name: "XWV_END_DATE" },
        ]
      },
    ]
  });
};
