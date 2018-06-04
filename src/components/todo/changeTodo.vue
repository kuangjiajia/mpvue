<template lang="pug">
  div(:class="addTodoStyle")
    textarea(cols="10" rows="10" placeholder="您想做什么" fixed=true v-model="content" focus=true)
    i.del(@click="clickCloseChangeTodo")
    i.choose(@click="handleClickChangeTodo")
    picker(@change="bindTimeChange" mode="time" )
      view.picker 选择时间：{{publishTime}}
    picker(@change="bindDateChange" mode="date" )
      view.picker 选择日期：{{publishDate}}
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
      background url("../../static/img/del.png")
      background-size 100% 100%
    i.choose 
      position absolute
      right 34vw
      bottom 2vw
      width 10vw
      height 10vw
      background url("../../static/img/true.png")
      background-size 100% 100%
  .hideAddTodo    
    display none

</style>
<script>
import { mapState , mapMutations } from 'vuex'
import { getDayType , getTypeTodo } from '../../config'
export default {
  data () {
    return {
      id: 0,
      publishTime: "",
      publishDate: "",
      content: "",
      finish: false,
      date: ""
    }
  },
  props:{
    ischangeTodo: Boolean,
    changeId: Number,
    changeType: String
  },
  computed: {
    addTodoStyle: function() {
      return this.ischangeTodo ? "add-todo" : ""
    },
    ...mapState({
        todolist: state => state.todo
    })
  },
  methods: {
    ...mapMutations({
      changeTodo: "changeTodo"
    }),
    bindTimeChange(e) {
      this.publishTime = e.target.value
    },
    bindDateChange(e) {
      this.publishDate = e.target.value
    },
    clickCloseChangeTodo () {
      this.$emit('closeTodoClick')
    },
    handleClickChangeTodo() {
        const { content , publishTime , publishDate , id , finish , date} = this
        const type = getDayType(`${publishDate} ${publishTime}:00`)
        if(type === "Previous") {
          console.log("时间已经过了！")
        }else {
          this.changeTodo({
            todo: {
              content,
              publishTime,
              publishDate,
              finish,
              id,
              date
            }
          })
        }
        this.$emit('closeTodoClick')
    },
    getIdMes(type,id) {
      if(this.todolist !== undefined) {
        const mes = this.todolist.filter(item => {
            return item.id === id
        })
        console.log(this.todolist)
        
        this.publishTime = mes[0].publishTime
        this.publishDate = mes[0].publishDate
        this.content = mes[0].content
        this.id = mes[0].id
        this.finish = mes[0].finish
        this.date = mes[0].date
      }
    }
  },
  mounted: function() {
      this.getIdMes(this.changeType,this.changeId)
      console.log(this.changeType,this.changeId)
  }
}
</script>
