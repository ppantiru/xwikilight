const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikispace', {
    XWS_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWS_REFERENCE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWS_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XWS_PARENT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWS_HIDDEN: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xwikispace',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWS_ID" },
        ]
      },
      {
        name: "SPACE_REFERENCE",
        using: "BTREE",
        fields: [
          { name: "XWS_REFERENCE" },
        ]
      },
      {
        name: "SPACE_NAME",
        using: "BTREE",
        fields: [
          { name: "XWS_NAME" },
        ]
      },
      {
        name: "SPACE_PARENT",
        using: "BTREE",
        fields: [
          { name: "XWS_PARENT" },
        ]
      },
      {
        name: "SPACE_HIDDEN",
        using: "BTREE",
        fields: [
          { name: "XWS_HIDDEN" },
        ]
      },
    ]
  });
};
