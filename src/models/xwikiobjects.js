const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikiobjects', {
    XWO_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWO_NUMBER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XWO_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWO_CLASSNAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWO_GUID: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikiobjects',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWO_ID" },
        ]
      },
      {
        name: "OBJ_NUMBER",
        using: "BTREE",
        fields: [
          { name: "XWO_NUMBER" },
        ]
      },
      {
        name: "OBJ_NAME",
        using: "BTREE",
        fields: [
          { name: "XWO_NAME" },
        ]
      },
      {
        name: "OBJ_CLASSNAME",
        using: "BTREE",
        fields: [
          { name: "XWO_CLASSNAME" },
        ]
      },
    ]
  });
};
