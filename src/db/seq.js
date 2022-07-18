const { Sequelize } = require('sequelize')
const {MYSQL_DB, MYSQL_HOST, MYSQL_USER, MYSQL_PWD} = require('../config/config.default')

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: 'mysql' // mysql的版本需要大于5.8
});

sequelize.authenticate().then(() => {
    console.log('数据库连接成功')
})

module.exports = sequelize