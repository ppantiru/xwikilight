const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activitystream_events_targets', {
    eventId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      references: {
        model: 'activitystream_events',
        key: 'ase_eventid'
      }
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'activitystream_events_targets',
    timestamps: false,
    indexes: [
      {
        name: "FK2bj2ghquiq79toomkvugw7iie",
        using: "BTREE",
        fields: [
          { name: "eventId" },
        ]
      },
    ]
  });
};
