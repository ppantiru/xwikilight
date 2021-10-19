const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feeds_feedentrytags', {
    fet_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'feeds_feedentry',
        key: 'fee_id'
      }
    },
    fet_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fet_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'feeds_feedentrytags',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fet_id" },
          { name: "fet_number" },
        ]
      },
    ]
  });
};
