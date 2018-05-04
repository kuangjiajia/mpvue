import bodyParser from 'koa-bodyparser'
import koaStatic from 'koa-static'
import path from 'path'
import koaStaticServer from 'koa-static-server'

export default app => {
    // console.log(path.resolve("../public"))
    app.use(bodyParser())
    // app.use(koaStatic(path.resolve("../public")))
    app.use(koaStaticServer({
        rootDir: "/usr/wxNode/mpvue/server/public",
        rootPath: '/wxTest'
    }))
}