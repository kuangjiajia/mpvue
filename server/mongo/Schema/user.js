// import { mongoose , Schema } from '../index.js'
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    openid: String,
    userInfor: Object
})

const userModel = mongoose.model('user', UserSchema)

const createNewUser = userMes => {
    const newUser = new userModel(userMes)
    newUser.save()
}

export {
    createNewUser
}