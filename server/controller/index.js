import rp from 'request-promise'


import mongoose from '../mongo'
import { formatUrl } from '../config'
import { client , randomStr } from '../redis'

export default {
    login: async (ctx,next) => {
        const { code } = ctx.query
        const getCodeUrl = formatUrl(code)
        const data = await rp(getCodeUrl)
        const str = randomStr(50)
        client.hmset(str,JSON.parse(data),(err) => {
            if(err) console.log(err)
            else console.log("success")            
        })
        ctx.set("authtoken",str)
        ctx.body = {
            status: 200
        }
        ctx.status = 200
    }
}