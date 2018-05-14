import bodyParser from 'koa-bodyparser'
import koaStatic from 'koa-static'
import path from 'path'
import koaStaticServer from 'koa-static-server'
import wechat from './wechat/Wechat/index.js'
import token from './wechat/Token/token.js'
import reply from  './wechat/reply/index.js'

export default app => {
    app.use(bodyParser())
    app.use(wechat())
    app.use(koaStatic(path.resolve("../public")))
    
    // app.use(token())
    
    // reply(app)
    app.use(koaStaticServer({
        rootDir: "/usr/wxNode/mpvue/server/public",
        rootPath: '/wx'
    }))
}