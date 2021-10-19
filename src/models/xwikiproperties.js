const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikiproperties', {
    XWP_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWP_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    XWP_CLASSTYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikiproperties',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWP_ID" },
          { name: "XWP_NAME" },
        ]
      },
      {
        name: "PROP_NAME",
        using: "BTREE",
        fields: [
          { name: "XWP_NAME" },
        ]
      },
    ]
  });
};
