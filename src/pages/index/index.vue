<template lang="pug">
  .containers
    .school-area-input
      .school-area
        i
      .area-input
    ul.book-type 
      li 1
      li 2
      li 3
      li 4
      li 5
      li 6
    .choose-scope
      .one-school
      .all-school
    
</template>

<style lang="stylus" scoped>
  .containers   
    width 100vw
    height 100vh
    background-color #1e2a3c
    .school-area-input 
      width 100vw
      height 4vh
      background-color red
      .school-area 
        width 4vw
        height 4vw
        background url('../../static/img/area.png')
        background-size 100% 100%

      
</style>




<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  components: {
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getHaha () {
      console.log(123)
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>
