<template lang="pug">
  div(:class="addArticleStyle")
    h1
      input(type="text" placeholder="标题" v-model="title")
    textarea(cols="10" rows="10" placeholder="您想做什么" fixed=true v-model="content" focus=true)
    i.del(@click="clickCloseChangeArticle")
    i.choose(@click="handleClickChangeArticle")
</template>
<style lang="stylus" scoped>
  .add-article
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
    h1 
      height 7vh
      line-height 7vh
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
  .hideAddArticle  
    display none

</style>
<script>
import { mapState , mapMutations } from 'vuex'
import { getTypeTodo } from '../../config'
export default {
  data () {
    return {
      id: 0,
      content: "",
      title: "",
      date: ""
    }
  },
  props:{
    ischangeArticle: Boolean,
    changeId: Number,
  },
  computed: {
    addArticleStyle: function() {
      return this.ischangeArticle ? "add-article" : ""
    },
    ...mapState({
        articleList: state => state.article
    })
  },
  methods: {
    ...mapMutations({
      changeArticle: "changeArticle"
    }),
    clickCloseChangeArticle () {
      this.$emit('closeArticleClick')
    },
    handleClickChangeArticle() {
        const { content , id , title , date} = this
        this.changeArticle({
            article: {
                content,
                title,
                date,
                id
            }
        })
        this.$emit("closeArticleClick")
    },
    getIdMes(type,id) {
      if(this.articleList !== undefined) {
        const mes = this.articleList.filter(item => {
            return item.id === id
        })
        console.log(mes)
        this.content = mes[0].content
        this.id = mes[0].id
        this.title = mes[0].title
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
