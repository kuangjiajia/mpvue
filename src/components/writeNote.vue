<template lang="pug">
  .write-note
    i.del
    input(type="text" placeholder="标题")
    textarea(cols="10" rows="10" placeholder="内容" fixed=true maxlength="-1")
    i.choose
</template>
<style lang="stylus" scoped>
  .write-note
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    width 70vw
    height 60vh
    margin auto 
    padding 5vh 5vw
    background-color #fff
    box-shadow 2px 2px 30px black 
    border-radius 3vw
    color grey
    i.del 
      position absolute
      right 3vw 
      top 2vh 
      width 8vw
      height 8vw
      background url("../static/img/del.png")
      background-size 100% 100%
    input 
      height 5vh
      font-size 25px
    textarea 
      width 70vw
      height 45vh
      margin 5vh 0 0 0
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
    
}
</script>