<template lang="pug">
    li(:class="[isActive ? 'clickTodo' : 'todolist']")
      h3(@click="todoClick" ) {{todoListData.title}}
      ul.content
        h2 
          span Today
          i 
        li(v-for="(itemTip,index1) in todoListData.todo" :key="index1")
          i 
          span {{itemTip}}
      ul.content
        h2 
          span Tomorrow
          i
        li(v-for="(itemTip,index1) in todoListData.todo" :key="index1")
          i 
          span {{itemTip}}
      ul.content
        h2 
          span Later
          i
        li(v-for="(itemTip,index1) in todoListData.todo" :key="index1")
          i 
          span {{itemTip}}
      i.add-icon(@click="addTodoClick")
      i.close-icon
      addTodo(:isaddTodo="addTodo" @addTodoClick="addTodoClick")
      //- oneDay

</template>

<style lang="stylus" scoped>
li
  position relative
  overflow hidden
  transition all 1s ease
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
    margin 2vh auto
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
    h2
      height 4vh 
      i 
        float right 
        width 3vh
        height 3vh
        margin-right 5vw
        background url("../static/img/more.png")
        background-size 100% 100%
      span 
        float left
        width 20vw 
        height 100%
  i.close-icon 
      position absolute 
      top 1vh
      right 3vw
      width 4vh
      height 4vh
      background url("../static/img/close.png")
      background-size 100% 100%
  .showTodo
     display block
  .hideTodo
    display none
</style>

<script>
import addTodo from './addTodo.vue'
import oneDay from './oneDay.vue'
import {itemList} from '../config/index.js'

export default {
  data() {
    return {
      todoListData: itemList[0],
      isActive: false,
      addTodo: false
    }
  },
  methods: {
    todoClick() {
      this.isActive = !this.isActive
    },
    addTodoClick() {
      this.addTodo = !this.addTodo
    }
  },
  components: {
    addTodo,
    oneDay
  },
  mounted() {
  }
}
</script>
