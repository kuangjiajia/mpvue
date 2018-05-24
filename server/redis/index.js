import redis from 'redis'
// import Promise from 'bluebird'
import { resolve } from 'path';

const client = redis.createClient()

// Promise.promisifyAll(redis.RedisClient.prototype);
// Promise.promisifyAll(redis.Multi.prototype);

class Redis {
    randomStr(len) {
        var str = ""
        for(let i = 0 ; i < len ; i++) {
            str += Math.random().toString(36).substr(2)
        }
        return str
    }
    set(key,value) {
        client.set(key,value)
    }
    get(key) {
        return new Promise((resolve,reject) => {
            client.get(key,(err,reply) => {
                resolve(reply)
            })
        })
    }
}

export default new Redis()