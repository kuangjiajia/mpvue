import API from '../../api'
let state = []

const mutations = {
  addTodo(state, action) {
    state.push(action.todo)
    API.insertTodo(action.todo)
  },
  deleteTodo(state, action) {
    state.forEach((item,index) => {
      if(item.id === action.id) {
          state.splice(index,1)
      }
    })
    API.removeTodo(action.id)
  },
  changeTodo(state, action) {
    state.forEach((item,index) => {
      console.log(item)
      if(item.id === action.todo.id) {
        state.splice(index,1,action.todo)
      }
    })
    API.updateTodo(action.todo)
  },
  finishTodo(state, action) {
    state.forEach((item,index) => {
      if(item.id === action.id) {
        state[index].finish = !state[index].finish 
      }
    })
  }
}

const action = {}

export default {
  state,
  mutations,
  action
}
