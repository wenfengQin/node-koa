const { createuser } = require('../service/user.service')
const { userRegisterError } = require('../constant/error.type')

class UserController {
    async register(ctx, next) {
        // 获取请求数据
        const { user_name, password } = ctx.request.body
        try {
            // 操作数据库
            const res = await createuser(user_name, password)
            // 返回数据消息
            ctx.body = {
                code: 0,
                message: '用户注册成功',
                result: {
                    id: res.id,
                    user_name: res.user_name
                }
            }
        } catch(error) {
            ctx.app.emit('error', userRegisterError, ctx)
        }
    }
    async login(ctx, next) {
        const { user_name, password } = ctx.request.body
        ctx.body = {
            user_name, password
        }
    }
}

module.exports = new UserController()