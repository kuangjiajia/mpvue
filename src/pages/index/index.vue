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
      articleList
</template>

<script>
import '../../static/stylus/index.styl'
import todoList from '../../components/todo/todoList.vue'
import { itemList , getMes } from '../../config'
import echartsDemo from '../../components/echarts.vue'
import articleList from '../../components/article/articleList.vue'
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
    echartsDemo,
    todoList,
    articleList
  },
  methods: {
    todoClick() {

    },
    // async getWeather() {
    //   const { dayList, todayWeather} = await getMes()
    //   this.dayList = dayList
    //   console.log(dayList)
    //   wx.setStorageSync("dayList",dayList)
    //   wx.setStorageSync("todayWeather",todayWeather)
    //   this.todayWeather = todayWeather
    // }
  },
  onLoad() {

  },
  async beforeCreate () {
    // 调用应用实例的方法获取全局数据
      const { dayList, todayWeather} = await getMes()
      wx.setStorageSync("dayList",dayList)
      wx.setStorageSync("todayWeather",todayWeather)
  },
  mounted () {
    // this.getWeather()
      this.dayList = wx.getStorageSync("dayList")
      this.todayWeather = wx.getStorageSync("todayWeather")
}
}
</script>
