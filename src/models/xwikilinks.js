const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikilinks', {
    XWL_DOC_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XWL_LINK: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    XWL_FULLNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikilinks',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XWL_DOC_ID" },
          { name: "XWL_LINK" },
        ]
      },
      {
        name: "XWLNK_LINK",
        using: "BTREE",
        fields: [
          { name: "XWL_LINK" },
        ]
      },
    ]
  });
};
