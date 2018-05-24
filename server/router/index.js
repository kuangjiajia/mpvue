import Router from 'koa-router'
import controller from '../controller'

const router = new Router()

export default app => {
    router.get("/login",controller.login)
          .post("/register",controller.register)

    app.use(router.routes())
       .use(router.allowedMethods())
}