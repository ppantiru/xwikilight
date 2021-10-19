const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feeds_aggregatorgroup', {
    agg_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    agg_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'feeds_aggregatorgroup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "agg_id" },
        ]
      },
    ]
  });
};
