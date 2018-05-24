import Koa from 'koa'
import path from 'path'


import { PORT } from './config/index.js'
import router from './router'
import middleware from './middleware'


const app = new Koa()

//注意,这里很坑啊  middleware要比router先调用 否则要翻车啊啊啊啊
middleware(app)

router(app)

app.listen(PORT,() => {
    console.log("server is start")
})