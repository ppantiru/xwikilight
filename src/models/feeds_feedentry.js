const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feeds_feedentry', {
    fee_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fee_title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fee_author: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fee_feedurl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fee_feedname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fee_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fee_category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fee_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fee_fullcontent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fee_xml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fee_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    fee_flag: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fee_read: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'feeds_feedentry',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fee_id" },
        ]
      },
    ]
  });
};
