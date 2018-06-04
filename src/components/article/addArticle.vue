<template lang="pug">
  div(:class="addArticleStyle")
    h1
      input(type="text" placeholder="标题" v-model="title" focus=true)
    textarea(cols="10" rows="10" placeholder="您想做什么" fixed=true v-model="content" maxlength=-1)
    i.del(@click="clickCloseAddToArticle")
    i.choose(@click="handleClickAddArticle")
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
      height 50vh
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

</style>
<script>
import { mapState , mapMutations } from 'vuex'
import { getDateNow } from '../../config'
export default {
  data () {
    return {
      content: "",
      title: ''
    }
  },
  props:{
    isaddArticle: Boolean
  },
  computed: {
    addArticleStyle: function() {
      return this.isaddArticle ? "add-article" : ""
    }
  },
  methods: {
    ...mapMutations({
      addArticle: "addArticle"
    }),
    clickCloseAddToArticle () {
      console.log(123)
      this.$emit('closeArticleClick')
    },
    handleClickAddArticle() {
      const { content , title } = this
      this.addArticle({
          article: {
            content,
            title,
            id: new Date().getTime(),
            date: getDateNow()
          }
      })
      console.log(getDateNow())
      this.$emit('closeArticleClick')
      this.content = ""
      this.title = ""
    }
  }
}
</script>
