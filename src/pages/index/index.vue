<template lang="pug">
  .containers
    h1.city {{weather.city_name}}
    h2.weather {{weather.now.text}}
    h1.temperature {{}}°
    ul.date
      li(v-for="(day,index) in dayList" :key="day.date")
        span {{day.date }}
        img(v-bind:src="day.weather")
        span {{day.temprature + '°'}}
    .echarts
      echartsDemo
    ul.day-do
      todoList
      //- note
</template>

<script>
import '../../static/stylus/index.styl'
import todo from '../../components/todo.vue'
import todoList from '../../components/todoList.vue'
import {dayList, itemList} from '../../config/index.js'
import echartsDemo from '../../components/echarts.vue'
import note from '../../components/note.vue'
import API from '../../api'

export default {
  data () {
    return {
      dayList,
      itemList,
      weather: {}
    }
  },
  components: {
    todo,
    echartsDemo,
    todoList,
    note
  },
  methods: {
    todoClick() {

    },
    async getWeather() {
      const res = await API.getWeather()
      this.weather = res.data.weather[0]
      console.log(this.weather.now.text)
    }
  },
  onLoad: () => {
  },
  created () {
    // 调用应用实例的方法获取全局数据
  },
  mounted () {
    this.getWeather()    
  }
}
</script>
