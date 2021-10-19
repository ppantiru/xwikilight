const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikistatsdoc', {
    XWS_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWS_NUMBER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWS_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWS_CLASSNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWS_ACTION: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWS_PAGE_VIEWS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWS_UNIQUE_VISITORS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWS_PERIOD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWS_VISITS: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikistatsdoc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWS_ID" },
        ]
      },
      {
        name: "XWDS_NAME",
        using: "BTREE",
        fields: [
          { name: "XWS_NAME" },
        ]
      },
      {
        name: "XWDS_ACTION",
        using: "BTREE",
        fields: [
          { name: "XWS_ACTION" },
        ]
      },
      {
        name: "XWDS_PAGE_VIEWS",
        using: "BTREE",
        fields: [
          { name: "XWS_PAGE_VIEWS" },
        ]
      },
      {
        name: "XWDS_UNIQUE_VISITORS",
        using: "BTREE",
        fields: [
          { name: "XWS_UNIQUE_VISITORS" },
        ]
      },
      {
        name: "XWDS_PERIOD",
        using: "BTREE",
        fields: [
          { name: "XWS_PERIOD" },
        ]
      },
      {
        name: "XWDS_VISITS",
        using: "BTREE",
        fields: [
          { name: "XWS_VISITS" },
        ]
      },
    ]
  });
};
