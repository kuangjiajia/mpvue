import Wechat from './wechat.js'
import { wechatConfig } from '../config/config.js'
import Token from '../Token/token.js'

module.exports = () => {
    const wechat = new Token()
    return new Wechat(wechatConfig)
}