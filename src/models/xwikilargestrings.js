const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikilargestrings', {
    XWL_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikiproperties',
        key: 'XWP_ID'
      }
    },
    XWL_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikiproperties',
        key: 'XWP_NAME'
      }
    },
    XWL_VALUE: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikilargestrings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWL_ID" },
          { name: "XWL_NAME" },
        ]
      },
      {
        name: "XWLS_NAME",
        using: "BTREE",
        fields: [
          { name: "XWL_NAME" },
        ]
      },
    ]
  });
};
