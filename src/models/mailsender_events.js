const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mailsender_events', {
    mail_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    mail_batchId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mail_state: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mail_date: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    mail_recipients: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    mail_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mail_errorSummary: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    mail_errorDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mail_wiki: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mailsender_events',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mail_id" },
        ]
      },
      {
        name: "MAIL_BATCH_ID",
        using: "BTREE",
        fields: [
          { name: "mail_batchId" },
        ]
      },
      {
        name: "MAIL_STATE",
        using: "BTREE",
        fields: [
          { name: "mail_state" },
        ]
      },
      {
        name: "MAIL_DATE",
        using: "BTREE",
        fields: [
          { name: "mail_date" },
        ]
      },
      {
        name: "MAIL_TYPE",
        using: "BTREE",
        fields: [
          { name: "mail_type" },
        ]
      },
      {
        name: "MAIL_WIKI",
        using: "BTREE",
        fields: [
          { name: "mail_wiki" },
        ]
      },
    ]
  });
};
