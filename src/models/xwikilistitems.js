const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikilistitems', {
    XWL_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikilists',
        key: 'XWL_ID'
      }
    },
    XWL_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'xwikilists',
        key: 'XWL_NAME'
      }
    },
    XWL_NUMBER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    XWL_VALUE: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikilistitems',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWL_ID" },
          { name: "XWL_NAME" },
          { name: "XWL_NUMBER" },
        ]
      },
      {
        name: "XWLI_NAME",
        using: "BTREE",
        fields: [
          { name: "XWL_NAME" },
        ]
      },
      {
        name: "XWLI_VALUE",
        using: "BTREE",
        fields: [
          { name: "XWL_VALUE" },
        ]
      },
    ]
  });
};
