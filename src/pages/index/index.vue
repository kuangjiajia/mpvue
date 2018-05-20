<template lang="pug">
  .containers
    h1.city 重庆市
    h2.weather 多云
    h1.temperature 23°
    ul.date
      li(v-for="(day,index) in dayList" :key="day.date")
        span {{day.date }}
        img(v-bind:src="day.weather")
        span {{day.temprature + '°'}}
    .echarts
      //- echartsDemo
    ul.day-do
      todoList
</template>

<script>
import '../../static/stylus/index.styl'
import todo from '../../components/todo.vue'
import todoList from '../../components/todoList.vue'
import {dayList, itemList} from '../../config/index.js'
// import echartsDemo from '../../components/echarts.vue'

export default {
  data () {
    return {
      dayList,
      itemList
    }
  },
  components: {
    todo,
    // echartsDemo,
    todoList
  },
  methods: {
    todoClick() {

    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  mounted () {
  }
}
</script>
