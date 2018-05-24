<template lang="pug">
 .containers 
  .userInfo
    img.user-avatar(v-if='userInfo.avatarUrl' :src='userInfo.avatarUrl')
    .card-input
      i
      input.school(type='text' placeholder="用户名称") 
      button(@click='getHaha') 注册
      button(open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo") 授权登录

</template>

<style lang="stylus" scoped>
.containers
  width 100vw
  height 90vh
  padding-top 10vh
  img.user-avatar
    display block
    width 30vw
    height 30vw
    margin 0 auto 17vh auto
    border-radius 30vw
  .card-input
    position relative
    width 90vw
    height 35vw
    margin 0 auto
    i
      position absolute
      width 8vw
      height 8vw
      top 1vw
      left 7vw
      background url("../../static/img/school.png")
      background-size 100% 100%
      z-index 10
    .school
      position relative
      width 70vw
      height 11vw
      padding-left 14vw
      margin 0 auto
      border-radius 5vw
      font-size 16px
      color black
    button
      width 84vw
      height 11vw
      line-height 11vw
      margin-top 10vh
      background-color white
      border none
      outline none
      text-align center
      color grey   
</style>




<script>
import card from '@/components/card'
import API from '../../api'
export default {
  data () {
    return {
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getHaha () {
      console.log(123)
    },
    async getUserInfo () {
      const userInfo = await API.getUserInfo()
      this.userInfo = JSON.parse(userInfo.rawData)
    },
    async register () {
      const { encryptedData , iv } = await API.getUserInfo()
      const cb = await API.register(encryptedData,iv)
      console.log(cb)
    }
  },
  async mounted () {
    // 调用应用实例的方法获取全局数据
    await Promise.all([
      this.getUserInfo(),
      this.register()
    ])
  }
}
</script>