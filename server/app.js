import Koa from 'koa'
import path from 'path'


import { PORT } from './config/utils.js'
import router from './router'
import middleware from './middleware'


const app = new Koa()



router(app)
middleware(app)

app.listen(PORT,() => {
    console.log("server is start")
})