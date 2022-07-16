const bcrypt = require('bcryptjs')

const { getUserInfo } = require('../service/user.service')
const { userFormateError, userAlreadyExited, userRegisterError } = require('../constant/error.type')

const userValidator = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    
    // 合法性
    if (!user_name || !password) {
        ctx.app.emit('error', userFormateError, ctx)
        return
    }
    await next()
}

const verifyuser = async (ctx, next) => {
    // 合理性处理
    const { user_name } = ctx.request.body
    try{
        const res = await getUserInfo({user_name})
        if (res) {
            ctx.app.emit('error', userAlreadyExited, ctx)
            return
        }
    } catch(error) {
        ctx.app.emit('error', userRegisterError, ctx)
        return
    }
    await next()
}

const cryptPassword = async(ctx, next) => {
    const { password } = ctx.request.body

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    ctx.request.body.password = hash

    await next()
}

module.exports = {
    userValidator,
    verifyuser,
    cryptPassword
}