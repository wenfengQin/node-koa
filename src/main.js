const app = require('../src/app/index')
const { APP_PORT } = require('./config/config.default')

app.listen(APP_PORT, () => {
    console.log(`项目已成功启动，地址：http://localhost:${APP_PORT}`)
})