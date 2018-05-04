import school from '../public/school.json'
import wechat from '../config/wechat.js'

export const controller = {
    index: async (ctx,next) => {
        ctx.response.type = "application/json"
        ctx.body = school
        await next()
    },
    wechat: async (ctx,next) => {
        validateWechat(ctx)
        await next()
    }
}