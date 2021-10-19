const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikidoc', {
    XWD_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWD_FULLNAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWD_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWD_TITLE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWD_LANGUAGE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    XWD_DEFAULT_LANGUAGE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    XWD_TRANSLATION: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    XWD_DATE: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    XWD_CONTENT_UPDATE_DATE: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    XWD_CREATION_DATE: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    XWD_AUTHOR: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWD_CONTENT_AUTHOR: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWD_CREATOR: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWD_WEB: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWD_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    XWD_VERSION: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWD_CUSTOM_CLASS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWD_PARENT: {
      type: DataTypes.STRING(511),
      allowNull: false
    },
    XWD_CLASS_XML: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    XWD_ELEMENTS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    XWD_DEFAULT_TEMPLATE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWD_VALIDATION_SCRIPT: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWD_COMMENT: {
      type: DataTypes.STRING(1023),
      allowNull: false
    },
    XWD_MINOREDIT: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    XWD_SYNTAX_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    XWD_HIDDEN: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xwikidoc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWD_ID" },
        ]
      },
      {
        name: "DOC_FULLNAME",
        using: "BTREE",
        fields: [
          { name: "XWD_FULLNAME" },
        ]
      },
      {
        name: "DOC_NAME",
        using: "BTREE",
        fields: [
          { name: "XWD_NAME" },
        ]
      },
      {
        name: "DOC_TITLE",
        using: "BTREE",
        fields: [
          { name: "XWD_TITLE" },
        ]
      },
      {
        name: "DOC_LANGUAGE",
        using: "BTREE",
        fields: [
          { name: "XWD_LANGUAGE" },
        ]
      },
      {
        name: "DOC_DEFAULT_LANGUAGE",
        using: "BTREE",
        fields: [
          { name: "XWD_DEFAULT_LANGUAGE" },
        ]
      },
      {
        name: "DOC_TRANSLATION",
        using: "BTREE",
        fields: [
          { name: "XWD_TRANSLATION" },
        ]
      },
      {
        name: "DOC_DATE",
        using: "BTREE",
        fields: [
          { name: "XWD_DATE" },
        ]
      },
      {
        name: "DOC_CONTENT_UPDATE_DATE",
        using: "BTREE",
        fields: [
          { name: "XWD_CONTENT_UPDATE_DATE" },
        ]
      },
      {
        name: "DOC_CREATION_DATE",
        using: "BTREE",
        fields: [
          { name: "XWD_CREATION_DATE" },
        ]
      },
      {
        name: "DOC_AUTHOR",
        using: "BTREE",
        fields: [
          { name: "XWD_AUTHOR" },
        ]
      },
      {
        name: "DOC_CONTENT_AUTHOR",
        using: "BTREE",
        fields: [
          { name: "XWD_CONTENT_AUTHOR" },
        ]
      },
      {
        name: "DOC_CREATOR",
        using: "BTREE",
        fields: [
          { name: "XWD_CREATOR" },
        ]
      },
      {
        name: "DOC_SPACE",
        using: "BTREE",
        fields: [
          { name: "XWD_WEB" },
        ]
      },
      {
        name: "DOC_MINOREDIT",
        using: "BTREE",
        fields: [
          { name: "XWD_MINOREDIT" },
        ]
      },
      {
        name: "DOC_HIDDEN",
        using: "BTREE",
        fields: [
          { name: "XWD_HIDDEN" },
        ]
      },
    ]
  });
};
