import bodyParser from 'koa-bodyparser'
import koaStatic from 'koa-static'
import path from 'path'
import koaStaticServer from 'koa-static-server'
import wechat from './wechat/Wechat/index.js'
// import token from './wechat/Token/token.js'
import reply from  './wechat/reply/index.js'
import rp from 'request-promise'

let wxurl = 'http://hongyan.cqupt.edu.cn/MagicLoop/index.php?s=/addon/Api/Api/bindVerify'
let token = 'gh_68f0a1ffc303'
let timestamp = '1526375631'
let string = 'hello'
let secret = '98f83a510686d27be5da70073b3a6c779c7bfea8'
let openid = 'ouRCyjndQXTkjgtAuzUG4F3MZNa8'

export default app => {
    app.use(bodyParser())
    app.use(wechat())
    app.use(koaStatic(path.resolve("../public")))
    // app.use(token())
    
    // reply(app)
    // app.use(koaStaticServer({
    //     rootDir: "/usr/wxNode/mpvue/server/public",
    //     rootPath: '/wx'
    // }))
}