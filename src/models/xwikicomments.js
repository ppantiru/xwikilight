const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikicomments', {
    XWC_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWC_AUTHOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWC_HIGHLIGHT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    XWC_COMMENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    XWP_REPLYTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWP_DATE: {
      type: DataTypes.DATE(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikicomments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWC_ID" },
        ]
      },
      {
        name: "COMMENT_AUTHOR",
        using: "BTREE",
        fields: [
          { name: "XWC_AUTHOR" },
        ]
      },
      {
        name: "COMMENT_REPLYTO",
        using: "BTREE",
        fields: [
          { name: "XWP_REPLYTO" },
        ]
      },
      {
        name: "COMMENT_DATE",
        using: "BTREE",
        fields: [
          { name: "XWP_DATE" },
        ]
      },
    ]
  });
};
