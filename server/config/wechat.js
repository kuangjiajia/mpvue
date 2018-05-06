import formatUri from './formatUri.js'
//token验证
const appid = "wx6c9c14c4da1cee55"
const secret = "212e715952042d4a958da7463822f78e"
const reqUri = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential"

//获取用户信息
const codeUri = "https://open.weixin.qq.com/connect/oauth2/authorize"
const redirect_uri = encodeURIComponent("https://kuangjiajia.cn/wxTest/index.html")
const response_type = "code"
const scope = "snsapi_userinfo"
const state = "mdzz"


export const getTokenUri = new formatUri(reqUri).addParams({appid,secret}).getUri()
export const getAuthCode = `${new formatUri(codeUri).addParams({appid,redirect_uri,response_type,scope,state}).getUri()}#wechat_redirect`
