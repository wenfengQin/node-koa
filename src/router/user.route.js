const Router = require('koa-router')

const router = new Router({ prefix: '/user' })

const { register, login } = require('../controller/user.controller')
const { userValidator, verifyuser, cryptPassword } = require('../middleware/user.middleware')

// 注册接口
router.post('/register', userValidator, verifyuser, cryptPassword, register)

// 登陆接口
router.post('/login', login)


module.exports = router