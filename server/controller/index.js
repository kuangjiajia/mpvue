import sha1 from 'sha1'
import url from 'url'
import http from 'http'
import school from '../public/school.json'
// import validateWechat from '../config/wechat.js'

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
	    	console.log("success")
	        ctx.body = ctx.query.echostr
	    }else {
	        ctx.body = { code: -1, msg: "fail"}
	    } 
	}
}