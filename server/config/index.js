//服务器配置
export const PORT = 6677





//微信配置
const appId = "wxd776e49773c3f300"
const appSecret = "d17539ee7c60e27ee5c2f1007a4080bc"


//微信方法
export const formatUrl = code => { //拿code的url
    return `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
}