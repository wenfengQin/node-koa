const { DataTypes } = require('sequelize')
const sqe = require('../db/seq')

const UserModel =  sqe.define('sf_user', {
    // id 会被sequelize自动创建，管理
    user_name: {
        type: DataTypes.STRING,
        allowNull: false, // 是否允许为空
        unique: true, // 字段是否唯一
        comment: '用户名，唯一', // 表的注释
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '密码',
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0, // 默认值
        comment: '是否为管理员，0-不是管理员（默认），1-是管理员',
    }
})

 // UserModel.sync({ force: true }) // 如果有这张表就会先删除再创建
