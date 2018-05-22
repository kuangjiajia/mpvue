<template lang="pug">
.one-day
	h1 今日清单
	i.del
	ul.finish 
		h2 已完成
		li(v-for="(item,index) in finishData")
			icon(type="cancel" size="20" color="black") 
			span {{item.data}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}
	ul.unfinish
		h2 未完成
		li(v-for="(item,index) in unfinishData")
			icon(type="success" size="20" color="black") 
			span {{item.data}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}
</template>
<style lang="stylus" scoped>
  .one-day
    position absolute 
    top 0
    bottom 0
    left 0
    right 0
    width 70vw
    height 66vh
    margin auto
    padding 2vh 5vw
    background-color #fff
    box-shadow 2px 2px 30px black
    border-radius 3vw
    i.del 
      position absolute
      right 3 vw
      top 2vh
      width 8vw
      height 8vw
      background url("../static/img/del.png")
      background-size 100% 100%
		h1 
			text-align center	
		ul 
			li 
				position relative
				font-size 15px
				margin 2vh auto
				span 
					position relative
					top -3px
					left 5px


</style>
<script>
  export default {
  data () {
    return {
			finishData: [
				{
					"data": "你真的好帅啊",
					"time": "10:30"
				},
				{
					"data": "你真叫啊叫啊纠结啊",
					"time": "10:30"
				},
				{
					"data": "你真撒的环境卡上",
					"time": "10:30"
				},				
			],
			unfinishData: [
				{
					"data": "你真的好帅啊",
					"time": "10:30"
				},
				{
					"data": "你真叫啊叫啊纠结啊",
					"time": "10:30"
				},
				{
					"data": "你真撒的环境卡上",
					"time": "10:30"
				},				
			]
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
