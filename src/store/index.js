import Vue from 'vue'
import todo from './modules/todolist'
import article from './modules/article'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        todo,
        article
    }
})