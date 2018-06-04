<template lang="pug">
div(class="typeList")
	h2.whichDay {{chooseType}}
	ul(class="content")
		li(v-for="(item,index) in todoList" :key="item.id")
			span(:class="{ finish : item.finish}") {{item.content}}
			i.modify(@click="clickToChange(chooseType,item.id)" )
			i.delete(@click="deleteTodoClick(item.id)")
	changeTodo(:ischangeTodo="changeTodo" @closeTodoClick="changeTodoClick" :changeId="changeId" :changeType="changeType" v-if="changeTodo")
	i.close-icon(@click="clickToClose")
</template>

<style lang="stylus" scoped>
.typeList
	position absolute 
	top 0
	bottom 0
	left 0
	right 0
	width 80vw
	height 65vh
	margin auto
	background-color #fff
	box-shadow 2px 2px 30px black
	border-radius 3vw
	.whichDay 
		width 100%
		height 5vh
		line-height 5vh
		background-color black 
		color white
		text-align center
	.content
		width 80vw
		height 57vh
		overflow scroll
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
	i.close-icon 
		position absolute 
		top 1vh
		right 2vw
		width 3vh
		height 3vh
		background url("../../static/img/close.png")
		background-size 100% 100%
</style>

<script>
import { mapState , mapMutations } from 'vuex'
import { getTypeTodo  } from '../../config'
import changeTodo from './changeTodo.vue'

export default {
	data() {
		return {
			changeId: 0,
			changeType: "",
			changeTodo: false
		}
	},
	computed: {
		...mapState({
			todoListData: state => state.todo
		}),
		todoList() {
			console.log(this.chooseType)
			console.log(this.todoListData)
			return getTypeTodo(this.todoListData,this.chooseType)
		}
	},
	props: {
		chooseType: String
	},
	methods: {
		...mapMutations({
      finishTodo: "finishTodo",
      deleteTodo: "deleteTodo"
    }),
    clickCloseChooseTodo () {
      this.$emit('closeTodoClick')
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
		changeTodoClick() {
      this.changeTodo = !this.changeTodo
		},
		clickToClose() {
			this.$emit("closeTodoClick")
		}
	},
	components: {
		changeTodo
	},
	mounted() {
		console.log(this.todoListData)
	}
}
    
</script>
