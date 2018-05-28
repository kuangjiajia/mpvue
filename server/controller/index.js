//npm的
import rp from 'request-promise'
//自身定义
import mongoose from '../mongo'
import { createNewUser } from '../mongo/model.js'
import { formatUrl , decodeData } from '../config'
import redis from '../redis'
import weather from '../config/city.json'
import md5 from 'md5'

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
    test: async (ctx,next) => {
        const arr = []
        for(var i = 0 ; i < 50 ; i++) {
            arr.push(md5("kuangjaasda"+i))
        }
        ctx.body = arr
    }
}