<template lang="pug">
  .echarts-wrap
    mpvue-echarts(:echarts="echarts" :onInit="onInit" canvasId="demo-canvas")
</template>

<script>
import echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'
import { dayList } from '../config/index.js'
let chart = null;
const xAxisData = dayList.map(item => {
    return item.date
})

const seriesData = dayList.map(item => {
    return item.temprature
})

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    xAxis: {
        type: 'category',
        data: xAxisData
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: seriesData,
        type: 'line',
        itemStyle: {
            normal: {
                color: 'black',  
                lineStyle:{ 
                    color: 'black'  //线的颜色
                }  
            }  
        }
    }]
  } // ECharts 配置项

  chart.setOption(option);

  return chart; // 返回 chart 后可以自动绑定触摸操作
}

export default {
  components: {
    mpvueEcharts
  },
  data () {
    return {
      echarts,
      onInit: initChart
    }
  }
}
</script>

<style scoped>
.echarts-wrap {
  width: 100%;
  height: 100%;
}
</style>