//npm的
import rp from 'request-promise'
//自身定义
import mongoose from '../mongo'
import { createNewUser } from '../mongo/model.js'
import { formatUrl , decodeData } from '../config'
import redis from '../redis'

export default {
    login: async (ctx,next) => {
        const { code } = ctx.query
        const getCodeUrl = formatUrl(code)
        const data = await rp(getCodeUrl)
        const str = redis.randomStr(50)
        redis.set(str,data)
        ctx.set("authtokens",str)
        ctx.body = {
            mes: "登录成功",
            code: 1
        }
    },
    register: async (ctx,next) => {
        const { authtokens  } = ctx.request.header
        const { userName , encryptedData , iv} = ctx.request.body
        const { openid , session_key} = JSON.parse(await redis.get(authtokens))
        const userInfo = decodeData(encryptedData,iv,session_key)
        createNewUser({openid,userInfo})
        ctx.body = {
            mes: "success",
            code: 1
        }
    }
}