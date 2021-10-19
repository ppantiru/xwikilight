const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikircs', {
    XWR_DOCID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWR_VERSION1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    XWR_VERSION2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    XWR_DATE: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    XWR_COMMENT: {
      type: DataTypes.STRING(1023),
      allowNull: false
    },
    XWR_AUTHOR: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWR_ISDIFF: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XWR_PATCH: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikircs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWR_DOCID" },
          { name: "XWR_VERSION1" },
          { name: "XWR_VERSION2" },
        ]
      },
      {
        name: "REV_DATE",
        using: "BTREE",
        fields: [
          { name: "XWR_DATE" },
        ]
      },
      {
        name: "REV_AUTHOR",
        using: "BTREE",
        fields: [
          { name: "XWR_AUTHOR" },
        ]
      },
      {
        name: "REV_ISDIFF",
        using: "BTREE",
        fields: [
          { name: "XWR_ISDIFF" },
        ]
      },
    ]
  });
};
