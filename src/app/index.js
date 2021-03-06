const koa = require('koa')
const koaBody = require('koa-body')
const koaLogger = require('koa-logger')

// const userRouter = require('../router/user.route')
// const indexRouer = require('../router/index.route')

const router = require('../router/index')

const errorHandle = require('./errorHandle')

const app = new koa()

app.use(koaLogger())
app.use(koaBody())

// app.use(indexRouer.routes())
// app.use(userRouter.routes())
app.use(router.routes()).use(router.allowedMethods())

app.on('error', errorHandle)

module.exports = app