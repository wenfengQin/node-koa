const koa = require('koa')
const koaBody = require('koa-body')

const userRouter = require('../router/user.route')
const indexRouer = require('../router/index.route')

const errorHandle = require('./errorHandle')

const app = new koa()

app.use(koaBody())
app.use(indexRouer.routes())
app.use(userRouter.routes())

app.on('error', errorHandle)

module.exports = app