const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notification_filter_prefs', {
    nfp_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nfp_owner: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nfp_filter_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nfp_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    nfp_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    nfp_filter_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nfp_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    nfp_event_types: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nfp_user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nfp_page_only: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nfp_page: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nfp_wiki: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nfp_alert: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    nfp_email: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'notification_filter_prefs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nfp_id" },
        ]
      },
      {
        name: "NFP_OWNER",
        using: "BTREE",
        fields: [
          { name: "nfp_owner" },
        ]
      },
      {
        name: "NFP_FILTER_NAME",
        using: "BTREE",
        fields: [
          { name: "nfp_filter_name" },
        ]
      },
    ]
  });
};
