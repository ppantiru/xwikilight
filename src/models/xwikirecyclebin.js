const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xwikirecyclebin', {
    XDD_ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    XDD_FULLNAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XDD_LANGUAGE: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    XDD_DATE: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    XDD_DELETER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XDD_XMLSTORE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    XDD_XML: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    XDD_BATCH_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xwikirecyclebin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XDD_ID" },
        ]
      },
      {
        name: "UKgm4gg28vt84o24svs1drmg3bq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XDD_FULLNAME" },
          { name: "XDD_LANGUAGE" },
          { name: "XDD_DATE" },
        ]
      },
      {
        name: "XDD_LANGUAGE",
        using: "BTREE",
        fields: [
          { name: "XDD_LANGUAGE" },
        ]
      },
      {
        name: "XDD_DATE",
        using: "BTREE",
        fields: [
          { name: "XDD_DATE" },
        ]
      },
      {
        name: "XDD_DELETER",
        using: "BTREE",
        fields: [
          { name: "XDD_DELETER" },
        ]
      },
      {
        name: "XDD_BATCH_ID",
        using: "BTREE",
        fields: [
          { name: "XDD_BATCH_ID" },
        ]
      },
    ]
  });
};
