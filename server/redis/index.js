import redis from 'redis'

const client = redis.createClient()
const randomStr = len => {
    var str = ""
    for(let i = 0 ; i < len ; i++) {
        str += Math.random().toString(36).substr(2)
    }
    return str.substr(0,len)
}


export { 
    client,
    randomStr
}