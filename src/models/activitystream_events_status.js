const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activitystream_events_status', {
    ases_eventid: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'activitystream_events',
        key: 'ase_eventid'
      }
    },
    ases_entityid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    ases_read: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'activitystream_events_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ases_eventid" },
          { name: "ases_entityid" },
        ]
      },
      {
        name: "EVENTSTATUS_ENTITYID",
        using: "BTREE",
        fields: [
          { name: "ases_entityid" },
        ]
      },
    ]
  });
};
