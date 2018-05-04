import Router from 'koa-router'
import { controller } from '../controller'

const router = new Router({
	  prefix: '/wxTest'
})

export default app => {
    router.get("/home",controller.home)
          .get("/wechat",controller.wechat)

    app.use(router.routes())
       .use(router.allowedMethods())
}