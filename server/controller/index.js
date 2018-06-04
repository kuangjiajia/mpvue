import rp from 'request-promise'
import mongoose from '../mongo'
import redis from '../redis'
import weather from '../config/city.json'
import md5 from 'md5'
import { formatUrl , decodeData } from '../config'
import { createNewUser,
         updateUser,
         insertArticle,
         updateArticle,
         insertTodo,
         updateTodo,
         removeTodo } from '../mongo/model.js'


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
        const { authtokens } = ctx.request.header
        const { username , encryptedData , iv} = ctx.request.body
        const { openid , session_key} = JSON.parse(await redis.get(authtokens))
        const userInfor = decodeData(encryptedData,iv,session_key)
        const info = await createNewUser({ openid ,userInfor , username}) //用户信息入库
        ctx.set("authtokens",authtokens)
        if(parseInt(info) === 0) {
            ctx.body = {
                mes: "注册成功",
                code: 0  
            }
        }else if(parseInt(info) === 1) {
            ctx.body = {
                mes: "该用户已存在",
                code: 1
            }
        }
    },
    getweather: async (ctx,next) => {
        const { city } = ctx.query
        const { authtokens } = ctx.request.header 
        const cityCode = weather.filter(i => i.name === city)[0].id
        const cityWeather = rp(`http://tj.nineton.cn/Heart/index/all?city=${cityCode}`)
        ctx.set("authtokens",authtokens)
        ctx.body = cityWeather
    },
    insertTodo: async (ctx,next) => {
        const { authtokens } = ctx.request.header
        const { content } = ctx.request.body
        const { openid } = JSON.parse(await redis.get(authtokens))
        const info = await insertTodo({openid,content})
        ctx.body = {
            mes: "插入成功啊！",
            code: 0
        }
    },
    updateTodo: async (ctx,next) => {
        const { authtokens } = ctx.request.header
        const { content } = ctx.request.body
        const { openid } = JSON.parse(await redis.get(authtokens))
        const info = await updateTodo({openid,content})
        ctx.body = {
            mes: "更新成功啊！",
            code: 0
        }
    },
    removeTodo: async (ctx,next) => {
        const { authtokens } = ctx.request.header
        const { content } = ctx.request.body
        const { openid } = JSON.parse(await redis.get(authtokens))
        const info = await removeTodo({openid,content})
        ctx.body = {
            mes: "删除成功啊！",
            code: 0
        }
    },
    insertArticle: async (ctx,next) => {
        const { authtokens } = ctx.request.header
        const { content } = ctx.request.body
        const { openid } = JSON.parse(await redis.get(authtokens))
        const info = await insertArticle({openid,content})
        ctx.body = {
            mes: "插入成功",
            code: 0
        }
    },
    updateArticle: async (ctx,next) => {
        const { authtokens } = ctx.request.header
        const { content } = ctx.request.body
        const { openid } = JSON.parse(await redis.get(authtokens))
        const info = await updateArticle({openid,content})
        ctx.body = {
            mes: "更新成功",
            code: 0
        }
    }
}