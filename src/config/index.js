import API from '../api'

const getMes = async () => {
  const res = (await API.getWeather()).data.weather[0]
  console.log(res)
  const todayWeather = res.now
  todayWeather.city_name = res.city_name
  console.log(todayWeather)
  const dayList = res.future.map((item,index) => {
    if(index < 7) {
      if(index === 0) {
        item.date = "今天"
      }else {
        item.date = item.date.slice(-2)
      }
      item.temperature = parseInt((parseInt(item.high)+parseInt(item.low))/2)
      item.weather = getWeatherImg(item)
      return item    
    }
  }).filter(item => item !== undefined)
  console.log(todayWeather.temperature)
  return { todayWeather , dayList }
}


const getWeatherImg = (item) => {
  if(item.text.indexOf("雷") !== -1) {
    console.log("asdasdas")
    return require('../static/img/thunder.png')
  }else if(item.text.indexOf("雨") !== -1) {
    return require('../static/img/rain.png')
  }else if(item.text.indexOf("云") !== -1) {
    return require('../static/img/cloudy.png')
  }else if(item.text.indexOf("雾") !== -1) {
    return require('../static/img/fog.png')
  }else if(item.text.indexOf("卷") !== -1) {
    return require('../static/img/sandstorm.png')
  }else if(item.text.indexOf("雪") !== -1) {
    return require('../static/img/snow.png')
  }else {
    return require('../static/img/sun.png')
  }
}

const itemList = [
  {
    title: '备忘录',
    className: 'todo-item',
		todo: ['今天晚上好好睡觉', '明天要早起', '记得吃饭哦']
  },
  {
    title: '随笔',
    className: 'essay',
    todo: ['你是谁啊', '十佳歌手', '回到过去']
  },
  {
    title: '账单',
    className: 'charge',
    todo: ['做个好梦', '我明天一定好好学习', 'do my best']
	}
]


const noteBook = [
  {
    title: '我爱你',
    content: "那死的哈是的话i啊是的"
  },
  {
    title: '我恨你',
    content: "那死的哈是的话i啊是的"
  },
  {
    title: '我回家啊啊哈哈',
    content: "那死的哈是的话i啊是的"
  },
]



export {
  getMes,
  itemList,
  noteBook
}