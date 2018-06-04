import API from '../../api'
let state = []

const mutations = {
  addArticle(state, action) {
    state.push(action.article)
    API.addArticle(action.article)
  },
  deleteArticle(state, action) {
    state.forEach((item,index) => {
      if(item.id === action.id) {
          state.splice(index,1)
      }
    })
  },
  changeArticle(state, action) {
    state.forEach((item,index) => {
      if(item.id === action.article.id) {
        state.splice(index,1,action.article)
      }
    })
    API.updateArticle(action.article)
  }
}

const action = {}

export default {
  state,
  mutations,
  action
}
