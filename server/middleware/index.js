import bodyParser from 'koa-bodyparser'
import koaStatic from 'koa-static'
import path from 'path'

export default app => {
    console.log(path.resolve("../public"))
    app.use(bodyParser())
    app.use(koaStatic(path.resolve("../public")))
}