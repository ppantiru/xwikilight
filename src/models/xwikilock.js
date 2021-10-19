const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikilock', {
    XWL_DOC_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWL_AUTHOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XWL_DATE: {
      type: DataTypes.DATE(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xwikilock',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWL_DOC_ID" },
        ]
      },
    ]
  });
};
