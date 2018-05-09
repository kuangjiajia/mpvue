import OAuth from 'co-wechat-oauth'
import{ wechatConfig } from '../config/config.js'


const client = new OAuth(wechatConfig.appid,wechatConfig.secret)
