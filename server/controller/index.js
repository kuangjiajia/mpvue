import sha1 from 'sha1'
import url from 'url'
import http from 'http'
import school from '../public/school.json'
import { getTokenUri } from '../config/wechat.js'
import request from 'request'
import rp from 'request-promise'

export const controller = {
    home: async (ctx,next) => {
        ctx.response.type = "application/json"
        ctx.body = JSON.stringify(school)
        console.log(123)
    }, 
    wechat: async (ctx,next) => {
    	console.log(456)
	    const { signature, 
		        timestamp,
		        echostr  ,
		        nonce } = ctx.query
	    const token = "kuangjiajia"
	    const newArr = [ nonce , timestamp , token]
	    const original = newArr.sort().join('')
	    const shaStr = sha1(original)
	    if(shaStr === signature) {
	        ctx.body = "success"
	    }else {
	        ctx.body = { code: -1, msg: "fail"}
	    } 
    },
    getToken: async (ctx,next) => {
	console.log(getTokenUri)
	const data = await rp(getTokenUri)
	ctx.body = JSON.stringify(data)
    }
}
