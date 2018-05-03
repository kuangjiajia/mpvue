import school from '../public/school.json'
export const controller = {
    index: async (ctx,next) => {
        ctx.response.type = "application/json"
        ctx.body = school
        await next()
    }
}