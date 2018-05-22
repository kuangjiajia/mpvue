<template lang="pug">
.add-todo 
  textarea(cols="10" rows="10" placeholder="您想做什么" fixed=true)
  i.del
  i.choose
  picker(@change="bindPickerChange" mode="time" :value="index" :range="array")
    view.picker 选择时间：{{publishTime}}
</template>
<style lang="stylus" scoped>
  .add-todo 
    position absolute 
    top 0
    bottom 0
    left 0
    right 0
    width 70vw
    height 60vh
    margin auto
    padding 5vh 5vw
    background-color #fff
    box-shadow 2px 2px 30px black
    border-radius 3vw
    textarea 
      width 70vw
      height 45vh
      background-color #fff
      font-size 18px
    i.del 
      position absolute
      right 3vw
      top 2vh
      width 8vw
      height 8vw
      background url("../static/img/del.png")
      background-size 100% 100%
    i.choose 
      position absolute
      right 34vw
      bottom 2vw
      width 10vw
      height 10vw
      background url("../static/img/true.png")
      background-size 100% 100%
        

</style>
<script>
  export default {
  data () {
    return {
      index: 0,
      publishTime: 0
    }
  },
  methods: {
    bindPickerChange (e) {
      this.publishTime = e.target.value
    }
  },
  mounted() {

  }
  }
</script>
