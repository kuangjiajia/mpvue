import sha1 from 'sha1'

module.exports = (options) => {

    return async (ctx,next) => {
        const { token } = options
        const { signature, 
            timestamp,
            echostr  ,
            nonce } = ctx.query
            console.log(ctx.query)
        const newArr = [ nonce , timestamp , token]
        const original = newArr.sort().join('')
        const shaStr = sha1(original)
        if(shaStr === signature) {
            ctx.body = echostr + ""
        }else {
            ctx.body = { code: -1, msg: "fail"}
        } 
        await next()
    }
}