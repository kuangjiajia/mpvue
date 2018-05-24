import KoaStatic from 'koa-static'
import bodyparser from 'koa-bodyparser'

export default app => {
    app.use(bodyparser({
        enableTypes:['json', 'form', 'text']
    }))
}