import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    openid: String,
    userInfor: Object,
    username: String
})

const User = mongoose.model('User', UserSchema)




const updateUser = async ({openid,userInfor,username}) => {
    let user = await User.findOne({openid}).exec()
    if(!user) {
        user = new User({
            openid,
            userInfor
        })
        await user.save()
    }else {
        user.userInfor = userInfor
        user = await user.save()
    }
}

const createNewUser = async ({openid,userInfor,username}) => {
    let user = await User.findOne({username}).exec()
    
    if(!user) {
        user = new User({
            openid,
            userInfor,
            username
        })
        await user.save()
        return 0
    }else {
        return 1
    }
}




export {
    createNewUser,
    updateUser
}