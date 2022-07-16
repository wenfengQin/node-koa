const { Sequelize } = require('sequelize')
const {MYSQL_DB, MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD} = require('../config/config.default')

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USERNAME, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: 'mysql'
});

module.exports = sequelize