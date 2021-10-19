const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feeds_aggregatorurl', {
    agg_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    agg_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agg_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agg_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    agg_nb: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'feeds_aggregatorurl',
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
