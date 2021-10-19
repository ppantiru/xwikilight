const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikiattrecyclebin', {
    XDA_ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XDA_DOCID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    XDA_FILENAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XDA_DATE: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    XDA_DOC_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XDA_DELETER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XDD_CONTENTSTORE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    XDA_XML: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikiattrecyclebin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XDA_ID" },
        ]
      },
      {
        name: "UKk57itp65fntlv128dvxeew9w2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XDA_DOCID" },
          { name: "XDA_FILENAME" },
          { name: "XDA_DATE" },
        ]
      },
      {
        name: "XDA_FILENAME",
        using: "BTREE",
        fields: [
          { name: "XDA_FILENAME" },
        ]
      },
      {
        name: "XDA_DATE",
        using: "BTREE",
        fields: [
          { name: "XDA_DATE" },
        ]
      },
      {
        name: "XDA_DOC_NAME",
        using: "BTREE",
        fields: [
          { name: "XDA_DOC_NAME" },
        ]
      },
      {
        name: "XDA_DELETER",
        using: "BTREE",
        fields: [
          { name: "XDA_DELETER" },
        ]
      },
    ]
  });
};
