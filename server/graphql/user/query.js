import {
    GraphQLID,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull
} from 'graphql'

import mongoose from 'mongoose'

import {
    userType
} from './model'

const User = moogose.model("user")

const user = {
    type: userType,
    args: {
        openid: {
            name: "openid",
            type: new GraphQLNonNull()
        }
    },
    async resolve(root,params,options) {
        const { openid } = params
    }
}
