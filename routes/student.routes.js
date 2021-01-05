const Router = require('koa-router')

const studentRoutes = new Router({ prefix: '/student' })

studentRoutes.get('/', ctx => {
    ctx.body = { ok: true, data: { students: [] } }
})

module.exports = studentRoutes