<template lang="pug">
    li(:class="[isActive ? 'clickTodo' : 'todolist']")
      h3(@click="todoClick" ) {{todoListData.title}}
      ul(class="content" v-for="(item,prop) of todoList" :key="prop")
        h2 
          span {{prop}} 
          i(@click="showTypeList(prop)")
        li(v-for="(itemTip,index1) in item" :key="index1" @click="finishTodoClick(itemTip.id)")
          span(:class="{ finish : itemTip.finish}") {{itemTip.content}}
          i.modify(@click="clickToChange(prop,itemTip.id)" )
          i.delete(@click="deleteTodoClick(itemTip.id)")
      i.add-icon(@click="addTodoClick")
      i.close-icon
      addTodo(:isaddTodo="addTodo" @closeTodoClick="addTodoClick" v-if="addTodo")
      changeTodo(:ischangeTodo="changeTodo" @closeTodoClick="changeTodoClick" :changeId="changeId" :changeType="changeType" v-if="changeTodo")
      typeTodoList(:ischooseTodo="chooseTodo" @closeTodoClick="chooseTodoClick" :chooseType="showType" v-if="chooseTodo")

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
      bottom 19vh 
      right 4vw
      width 8vw 
      height 8vw
      background url("../../static/img/add.png")
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
        width 2.5vh
        height 2.5vh
        margin .5vh 2vw 0 2vw
        &.modify
          background url('../../static/img/modify.png')
          background-size 100% 100%
        &.delete 
          background url('../../static/img/delete.png')
          background-size 100% 100%     
      span  
        display inline-block
        width 60vw
        height 4.5vh
        margin-right 2vw
        font-size 16px
        border-bottom 1px solid rgba(0,0,0,.1)
    h2
      height 4vh 
      span 
        float left
        width 20vw 
        height 100%
      i 
        float right 
        display block
        margin-right 10vw
        width 4vh
        height 4vh
        background url('../../static/img/more.png')
        background-size 100% 100%
  i.close-icon 
      position absolute 
      top 1vh
      right 3vw
      width 4vh
      height 4vh
      background url("../../static/img/close.png")
      background-size 100% 100%
  .showTodo
     display block
  .hideTodo
    display none
  .finish 
    text-decoration line-through
</style>

<script>
import addTodo from './addTodo.vue'
import changeTodo from './changeTodo.vue'
import typeTodoList from './typeTodoList.vue'
import { getTypeTodo, getDayType } from '../../config'
import { mapState , mapMutations } from 'vuex'
import { switchCase } from 'babel-types';

export default {
  data() {
    return {
      isActive: false,
      addTodo: false,
      changeTodo: false,
      chooseTodo: false,
      changeType: "",
      changeId: 0,
      showType: ""
    }
  },
  computed: {
    ...mapState({
      todoListData: state => state.todo
    }),
    todoList() {
      const obj = {
        Today: [],
        Tomorrow: [],
        Future: []
      }
      if(this.todoListData[0] !== undefined) {
        this.todoListData.forEach(item => {
          switch(getDayType(`${item.publishDate} ${item.publishTime}:00`)) {
            case "Today":
              obj.Today.push(item)
              break
            case "Tomorrow":
              obj.Tomorrow.push(item)
              break    
            default:
              obj.Future.push(item)
          }
        })
      }
      return obj
    }
  }, 
  components: {
    addTodo,
    changeTodo,
    typeTodoList
  },
  methods: {
    ...mapMutations({
      finishTodo: "finishTodo",
      deleteTodo: "deleteTodo"
    }),
    todoClick() {
      this.isActive = !this.isActive
    },
    addTodoClick() {
      this.addTodo = !this.addTodo
    },
    changeTodoClick() {
      this.changeTodo = !this.changeTodo
    },
    chooseTodoClick() {
      this.chooseTodo = !this.chooseTodo
    },
    finishTodoClick(id) {
      this.finishTodo({
        id: id
      })
    },
    deleteTodoClick(id) {
      this.deleteTodo({
        id: id
      })
    },
    clickToChange(type,id) {
      this.changeId = id
      this.changeType = type
      this.changeTodo = !this.changeTodo
    },
    showTypeList(type) {
      this.showType = type
      this.chooseTodo = !this.chooseTodo  
    }
  },
  mounted() {
  }
}
</script>
