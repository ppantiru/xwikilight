const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikistatsreferer', {
    XWR_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWR_NUMBER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWR_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWR_CLASSNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWR_REFERER: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    XWR_PAGE_VIEWS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWR_PERIOD: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikistatsreferer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWR_ID" },
        ]
      },
      {
        name: "XWRS_NAME",
        using: "BTREE",
        fields: [
          { name: "XWR_NAME" },
        ]
      },
      {
        name: "XWRS_PAGE_VIEWS",
        using: "BTREE",
        fields: [
          { name: "XWR_PAGE_VIEWS" },
        ]
      },
      {
        name: "XWRS_PERIOD",
        using: "BTREE",
        fields: [
          { name: "XWR_PERIOD" },
        ]
      },
    ]
  });
};
