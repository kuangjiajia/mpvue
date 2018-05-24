import {
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType    
} from 'graphql'

export const userType = new GraphQLObjectType({
    name: "User",
    fields: {
        openid: GraphQLString,
        nickName: GraphQLString,
        gender: GraphQLInt,
        language: GraphQLString,
        city: GraphQLString,
        province: GraphQLString,
        country: GraphQLString,
        avatarUrl: GraphQLString,
        watermark: GraphQLObjectType
    }
})

