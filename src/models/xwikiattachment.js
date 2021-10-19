const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikiattachment', {
    XWA_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWA_DOC_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    XWA_FILENAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWA_LONGSIZE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: -1
    },
    XWA_SIZE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWA_MIMETYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWA_DATE: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    XWA_AUTHOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWA_VERSION: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWA_COMMENT: {
      type: DataTypes.STRING(1023),
      allowNull: true
    },
    XDD_CONTENTSTORE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    XDD_ARCHIVESTORE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    XDD_CHARSET: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikiattachment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWA_ID" },
        ]
      },
      {
        name: "ATT_DOC_ID",
        using: "BTREE",
        fields: [
          { name: "XWA_DOC_ID" },
        ]
      },
      {
        name: "ATT_DATE",
        using: "BTREE",
        fields: [
          { name: "XWA_DATE" },
        ]
      },
      {
        name: "ATT_AUTHOR",
        using: "BTREE",
        fields: [
          { name: "XWA_AUTHOR" },
        ]
      },
    ]
  });
};
