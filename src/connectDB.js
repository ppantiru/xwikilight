const Sequelize = require('sequelize');

const db = new Sequelize('xwiki', 'xwiki', 'xwiki', {
  dialect: "mysql",
  host: "localhost",
  logging: false
});

module.exports = db;
