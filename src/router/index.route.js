const Router = require('koa-router')

const router = new Router()

// 首页
router.get('/', (ctx, next) => {
    ctx.body = '成功'
})

module.exports = router
