import crypto from 'crypto'
import url from 'url'
import http from 'http'
const sha1 = () => {
    const md5sum = crypto.createHash("sha1")
    md5sum.update(str);
    str = md5sum.digest("hex");
    return str
}

export const validateWechat = ctx => {
    const { signature , echostr , timestamp , nonce } = url.parse(ctx.req.url,true).query
    const token = "kuangjiajia"
    let oriArray  = [nonce,timestamp,token]
    oriArray.sort() //字典排序
    var original = oriArray.join('') //拼接字符串
    var scyptoString = sha1(original) //字符串加密
    if(signature == scyptoString){  // 比对
        ctx.response.type = "text/plain"
        ctx.body = "success"
    }else {
        ctx.response.type = "text/plain"
        ctx.body = "fail"
    }
  }