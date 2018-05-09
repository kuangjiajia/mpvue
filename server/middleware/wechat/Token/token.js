import rq from 'request-promise'
import fs from 'fs'
import{ wechatConfig } from '../config/config.js'
class Token {
    constructor(opts) {
        this.appid = opts.appid
        this.secret = opts.secret
        this.accessTokenUrl = opts.accessTokenUrl
        this.tokenPathname = opts.tokenPathname
        this.init()
    }
    init() {
        this.getAccessToken()
            .then(data => {
                try {
                    console.log(data)
                    data = JSON.parse(data)
                } catch(e){
                    return this.updateAccessToken()
                }
                if(this.isValidAccessToken(data)) {
                    return Promise.resolve(data)
                }else {
                    return this.updateAccessToken()
                }
            }).then(data => {
                this.access_token = data.access_token
                this.expires_in = data.expires_in
                this.saveAccessToken(JSON.stringify(data))
            }).catch(err => {
                console.log(err)
            })
    }
    getAccessToken() {
        return new Promise((resolve,reject) => {
            fs.readFile(this.tokenPathname,(err,data) => {
                if(err) resolve(err)
                else resolve(data)
            })
        })
    }
    saveAccessToken(data) {
        return new Promise((resolve,reject) => {
            fs.writeFile(this.tokenPathname,data,(err) => {
                reject(err)
            })
        })
    }
    isValidAccessToken(data) {
        if(!data || !data.access_token || !data.expires_in) {
            return false
        }
        const {access_token,expires_in} = data
        console.log(data)
        const now = new Date().getTime()
        if(now < expires_in) {
            return true
        }else {
            return false
        }
    }
    async updateAccessToken() {
        const { appid, secret , accessTokenUrl } = this
        const url = `${accessTokenUrl}&appid=${appid}&secret=${secret}`
        const now = new Date().getTime()
        const data = JSON.parse(await rq(url))
        data.expires_in = now + ( data.expires_in - 20 ) * 1000
        return Promise.resolve(data)
    }
}


module.exports = () => {
    return new Token(wechatConfig)
}