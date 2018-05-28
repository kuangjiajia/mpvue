const state = {
    previous: [],
    today: [],
    tomorrow: [],
    future: []
}

const mutations = {
    addTodo (state,action) {
        state[action.type] = [action.todo,...state[action.type]]
    },
    deleteTodo (state,action) {
        state[action.type] = state[action.type].filter(item => {
            item.id != action.id
        })
    },
    changeTodo (state,action) {
        state[action.type] = state[action.type].map(item => {
            if(item.id === action.id) {
                item = action.todo
            }
        })
    },
    finishTodo (state,action) {
        state[action.type] = state[action.type].map(item => {
            if(item.id === action.id) {
                item.finish = !item.finish
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