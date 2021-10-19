const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikifloats', {
    XWF_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikiproperties',
        key: 'XWP_ID'
      }
    },
    XWF_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikiproperties',
        key: 'XWP_NAME'
      }
    },
    XWF_VALUE: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikifloats',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWF_ID" },
          { name: "XWF_NAME" },
        ]
      },
      {
        name: "XWFLOAT_NAME",
        using: "BTREE",
        fields: [
          { name: "XWF_NAME" },
        ]
      },
      {
        name: "XWFLOAT_VALUE",
        using: "BTREE",
        fields: [
          { name: "XWF_VALUE" },
        ]
      },
    ]
  });
};
