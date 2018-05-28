<template lang="pug">
  .containers
    h1.city {{todayWeather.city_name}}
    h2.weather {{todayWeather.text}}
    h1.temperature {{todayWeather.temperature}}
    ul.date
      li(v-for="(day,index) in dayList" :key="day.date")
        span {{day.date }}
        img(v-bind:src="day.weather")
        span {{day.temperature + '°'}}
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
import { itemList , getMes } from '../../config'
import echartsDemo from '../../components/echarts.vue'
import note from '../../components/note.vue'
import API from '../../api'


export default {
  data () {
    return {
      dayList: [],
      itemList: [],
      todayWeather: {}
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
      const { dayList, todayWeather} = await getMes()
      this.dayList = dayList
      console.log(dayList)
      wx.setStorageSync("dayList",dayList)
      this.todayWeather = todayWeather
    }
  },
  onLoad: () => {
  },
  created () {
    // 调用应用实例的方法获取全局数据
  },
  async mounted () {
    await this.getWeather()
  }
}
</script>
