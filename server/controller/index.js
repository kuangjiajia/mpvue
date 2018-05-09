import sha1 from 'sha1'
import school from '../public/school.json'

export const controller = {
    home: async (ctx,next) => {
        ctx.response.type = "application/json"
        ctx.body = JSON.stringify(school)
        console.log(123)
    }, 

}
