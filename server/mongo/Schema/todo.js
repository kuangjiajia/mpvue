import mongoose from 'mongoose'


const TodoSchema = new mongoose.Schema({
    openid: String,
    content: Object
})

const Todo = mongoose.model("Todo",TodoSchema)

const insertTodo = async ({openid,content}) => {
    const todo = new Todo({
        openid,
        content
    })
    await todo.save()
}

const updateTodo = async ({openid,content}) => {
    let todo = await Todo.findOne({"openid":openid,"content.id":content.id})
    console.log(todo)
    if(!todo) {
        return 1
    }else {
        todo.content = content 
        await todo.save()
    }
}

const removeTodo = async ({openid,content}) => {
    await Todo.findOne({"openid":openid,"content.id":content.id}).remove()
}
export {
    insertTodo,
    updateTodo,
    removeTodo
}