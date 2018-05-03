import Router from 'koa-router'
import { controller } from '../controller'

const router = new Router()

export default app => {
    router.get("/index",controller.index)


    app.use(router.routes())
       .use(router.allowedMethods())
}