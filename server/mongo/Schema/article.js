import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
    openid: String,
    content: Object
})

const Article = mongoose.model("Article",ArticleSchema)

const insertArticle = async ({openid,content}) => {
    const article = new Article({
        openid,
        content 
    })
    await article.save()
}

const updateArticle = async ({openid,content}) => {
    let article = await Article.findOne({openid,"content.id": content.id})
    if(!article) {
        return 1
    }else {
        article.content = content 
        await article.save()
    }
}


export {
    insertArticle,
    updateArticle
}
