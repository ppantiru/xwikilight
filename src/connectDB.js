const Sequelize = require('sequelize');
const config = require('./config/config')

const db = new Sequelize(config.sql.maindb, config.sql.user, config.sql.password, {
  dialect: "mysql",
  host: config.sql.host,
  port: config.sql.port,
  logging: false
});


module.exports = db;