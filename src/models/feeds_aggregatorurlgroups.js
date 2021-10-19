const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feeds_aggregatorurlgroups', {
    agl_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'feeds_aggregatorurl',
        key: 'agg_id'
      }
    },
    agl_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    agl_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'feeds_aggregatorurlgroups',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "agl_id" },
          { name: "agl_number" },
        ]
      },
    ]
  });
};
