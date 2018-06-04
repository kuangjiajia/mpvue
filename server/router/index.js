import Router from 'koa-router'
import controller from '../controller'

const router = new Router()

export default app => {
    router.get("/login",controller.login)
          .post("/register",controller.register)
          .get("/getweather",controller.getweather)
          .post("/insertTodo",controller.insertTodo)
          .post("/updateTodo",controller.updateTodo)
          .post("/removeTodo",controller.removeTodo)
          .post("/insertArticle",controller.insertArticle)
          .post("/updateArticle",controller.updateArticle)

    app.use(router.routes())
       .use(router.allowedMethods())
}