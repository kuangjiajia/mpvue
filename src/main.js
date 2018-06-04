import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.config.productionTip = false
App.mpType = 'app'
//添加vuex
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()

export default {
  // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
  pages: ['pages/index/main', 'pages/login/main','pages/authorization/main'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
