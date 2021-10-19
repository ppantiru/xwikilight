const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feeds_keyword', {
    key_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    key_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    key_group: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'feeds_keyword',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "key_id" },
        ]
      },
    ]
  });
};
