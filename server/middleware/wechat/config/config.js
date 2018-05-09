import path from 'path'
export const wechatConfig = {
    appid: "wx6c9c14c4da1cee55",
    secret: "212e715952042d4a958da7463822f78e",
    token: "kuangjiajia",
    accessTokenUrl: "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential",
    tokenPathname: path.join(__dirname,"./access_token.js"),
    encodingAESKey: "tFM0TqGFz93Wmxrt31ewWUV1NbetAuYPUxSLYaSGdDD"
}