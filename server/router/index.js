import Router from 'koa-router'
import { controller } from '../controller'

const router = new Router({
	  prefix: '/wx'
})

export default app => {
    router.get("/home",controller.home)



    app.use(router.routes())
       .use(router.allowedMethods())
}
