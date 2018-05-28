<template lang="pug">
    li(@click="todoClick" v-bind:class="[isActive ? 'clickTodo' : 'todolist']")
      h3 随笔
      ul.content
        li(v-for="(itemTip,index1) in todoListData.todo" :key="index1")
          i 
          span {{itemTip}}
      i.add-icon
      i.close-icon
    //-   writeNote
</template>

<style lang="stylus" scoped>
li
  position relative
  overflow hidden
  // transition all 1s ease
  &.todolist
    margin 8vh auto
    width 80vw
    height 25vh
    box-shadow 2px 5px 20px #888888 
    border-radius 3vw
  &.clickTodo
    position fixed
    top 10vh
    left 5vw
    width 90vw
    height 80vh
    background-color #fff
    box-shadow 2px 5px 20px #888888 
    border-radius 5vw
    i.add-icon 
      position absolute
      bottom 4vh 
      right 4vw
      width 8vw 
      height 8vw
      background url("../static/img/add.png")
      background-size 100% 100%
  h3 
    height 6vh
    line-height 6vh
    width 100%
    background-color black
    color white
    text-align center
  ul.content
    width 80vw
    height 22vh
    margin 1.2vh auto
    li 
      height 5vh
      line-height 5vh
      width 100%
      margin-top 1vh
      font-family Serif
      i 
        display inline-block
        width 2vh
        height 2vh
        margin 0 3vw
        border 1px solid black
        border-radius 2vh
      span  
        display inline-block
        width 60vw
        height 4.5vh
        font-size 16px
        border-bottom 1px solid rgba(0,0,0,.1)
  i.close-icon 
      position absolute 
      top 1vh
      right 3vw
      width 4vh
      height 4vh
      background url("../static/img/close.png")
      background-size 100% 100%
</style>

<script>
import addTodo from './addTodo.vue'
import oneDay from './oneDay.vue'
import writeNote from './writeNote.vue'
import {itemList} from '../config/index.js'
export default {
  data() {
    return {
      todoListData: itemList[0],
      isActive: true
    }
  },
  methods: {
    // todoClick() {
    //   this.isActive = this.isActive ?  false : true
    //   console.log(123)
    // }
  },
  components: {
    writeNote
  },
  mounted() {
  }
}
</script>
