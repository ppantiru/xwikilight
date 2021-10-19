const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikipreferences', {
    XWP_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWP_LANGUAGE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_DEFAULT_LANGUAGE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_MULTI_LINGUAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWP_AUTHENTICATE_EDIT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWP_AUTHENTICATE_VIEW: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWP_AUTH_ACTIVE_CHECK: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWP_BACKLINKS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWP_SKIN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_STYLESHEET: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_STYLESHEETS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_EDITOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_WEBCOPYRIGHT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_TITLE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_VERSION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_META: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    XWP_USE_EMAIL_VERIFICATION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWP_SMTP_SERVER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_ADMIN_EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_VALIDATION_EMAIL_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    XWP_CONFIRMATION_EMAIL_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    XWP_INVITATION_EMAIL_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    XWP_LEFT_PANELS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    XWP_RIGHT_PANELS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    XWP_SHOW_LEFT_PANELS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWP_SHOW_RIGHT_PANELS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWP_LANGUAGES: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_REGISTRATION_ANONYMOUS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_REGISTRATION_REGISTERED: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_EDIT_ANONYMOUS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_EDIT_REGISTERED: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_COMMENT_ANONYMOUS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_COMMENT_REGISTERED: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWP_DOCUMENT_BUNDLES: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikipreferences',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWP_ID" },
        ]
      },
    ]
  });
};
