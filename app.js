const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const studentRoutes = require('./routes/student.routes')
const app = new Koa()

app.use(bodyParser())
app.use(studentRoutes.routes())

module.exports = app