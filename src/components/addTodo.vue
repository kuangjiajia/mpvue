<template lang="pug">
.add-todo 
  textarea(cols="10" rows="10" placeholder="您想做什么" fixed=true)
  i.del
  i.choose
  .choose-time
    .hour-item.time-item
    .minute-item.time-item
    picker(@change="bindPickerChange" :value="index" :range="array")
      view.picker 当前选择：{{array[index]}}
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
      height 60vh
      background-color #fff
      font-size 18px
    i.del 
      position absolute
      right 3 vw
      top 2vh
      width 8vw
      height 8vw
      background url("../static/img/del.png")
      background-size 100% 100%
    i.choose 
      position absolute
      right 34vw
      bottom -8vw
      width 16vw
      height 16vw
      background url("../static/img/true.png")
      background-size 100% 100%
    .choose-time
      position absolute 
      bottom 5vh
      left 5vw
      display flex 
      flex-flow wrap row
      width 70vw
      height 7vh
      .time-item 
        width 34vw
        height 100%
        border 1px solid black
        

</style>
<script>
  export default {
  data () {
    return {
      index: 0,
      array: ['A', 'B', 'C']
    }
  },
  methods: {
    bindPickerChange (e) {
      console.log(e)
    }
  },
    mounted() {
      document.addEventListener("touchmove",e => e.preventDefault() , false)
    }
  }
</script>
