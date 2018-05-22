import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/wxTest")

const con = mongoose.connection
const Schema = mongoose.Schema

mongoose.Promise = global.Promise;

con.on("error",err => {
    console.log("连接数据库出错! error: " + err)
})

con.on("open",() => {
    console.log("连接数据库成功!")
})

export default {
    mongoose,
    Schema   
}
