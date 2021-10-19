const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikidoubles', {
    XWD_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikiproperties',
        key: 'XWP_ID'
      }
    },
    XWD_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikiproperties',
        key: 'XWP_NAME'
      }
    },
    XWD_VALUE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikidoubles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWD_ID" },
          { name: "XWD_NAME" },
        ]
      },
      {
        name: "XWDOUBLE_NAME",
        using: "BTREE",
        fields: [
          { name: "XWD_NAME" },
        ]
      },
      {
        name: "XWDOUBLE_VALUE",
        using: "BTREE",
        fields: [
          { name: "XWD_VALUE" },
        ]
      },
    ]
  });
};
