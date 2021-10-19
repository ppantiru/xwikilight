const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikiintegers', {
    XWI_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikiproperties',
        key: 'XWP_ID'
      }
    },
    XWI_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikiproperties',
        key: 'XWP_NAME'
      }
    },
    XWI_VALUE: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikiintegers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWI_ID" },
          { name: "XWI_NAME" },
        ]
      },
      {
        name: "XWINT_NAME",
        using: "BTREE",
        fields: [
          { name: "XWI_NAME" },
        ]
      },
      {
        name: "XWINT_VALUE",
        using: "BTREE",
        fields: [
          { name: "XWI_VALUE" },
        ]
      },
    ]
  });
};
