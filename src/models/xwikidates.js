const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikidates', {
    XWS_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikiproperties',
        key: 'XWP_ID'
      }
    },
    XWS_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikiproperties',
        key: 'XWP_NAME'
      }
    },
    XWS_VALUE: {
      type: DataTypes.DATE(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikidates',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWS_ID" },
          { name: "XWS_NAME" },
        ]
      },
      {
        name: "XWDATE_NAME",
        using: "BTREE",
        fields: [
          { name: "XWS_NAME" },
        ]
      },
      {
        name: "XWDATE_VALUE",
        using: "BTREE",
        fields: [
          { name: "XWS_VALUE" },
        ]
      },
    ]
  });
};
