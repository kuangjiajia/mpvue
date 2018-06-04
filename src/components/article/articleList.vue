<template lang="pug">
    li(:class="[isActive ? 'clickArticle' : 'articlelist']")
      h3(@click="articleClick" ) 我的日记
      ul(class="content" v-if="havaData")
        li(v-for="(item,index1) in todoListArticle" :key="item.id")
          span {{item.title}}
          i.modify(@click="clickToChange(item.id)" )
          i.delete(@click="deleteArticleClick(item.id)")
      i.add-icon(@click="addArticleClick")
      i.close-icon
      addArticle(:isaddArticle="addArticle" @closeArticleClick="addArticleClick" v-if="addArticle")
      changeArticle(:ischangeArticle="changeArticle" @closeArticleClick="changeArticleClick" :changeId="changeId" v-if="changeArticle")

</template>

<style lang="stylus" scoped>
li
  position relative
  overflow hidden
  transition all 1s ease
  &.articlelist
    margin 8vh auto
    width 80vw
    height 25vh
    box-shadow 2px 5px 20px #888888 
    border-radius 3vw
  &.clickArticle
    position fixed
    top 10vh
    left 5vw
    width 90vw
    height 80vh
    background-color #fff
    box-shadow 2px 5px 20px #888888 
    border-radius 5vw
    i.add-icon 
      position absolute
      bottom 19vh 
      right 4vw
      width 8vw 
      height 8vw
      background url("../../static/img/add.png")
      background-size 100% 100%
  h3 
    height 6vh
    line-height 6vh
    width 100%
    background-color black
    color white
    text-align center
  ul.content
    width 80vw
    height 22vh
    margin 2vh auto
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
      right 3vw
      width 4vh
      height 4vh
      background url("../../static/img/close.png")
      background-size 100% 100%
  .showArticle
     display block
  .hideArticle
    display none
  .finish 
    text-decoration line-through
</style>

<script>
import addArticle from './addArticle.vue'
import changeArticle from './changeArticle.vue'
import { mapState , mapMutations } from 'vuex'

export default {
  data() {
    return {
      isActive: false,
      addArticle: false,
      changeArticle: false,
      changeId: 0
    }
  },
  computed: {
    ...mapState({
      todoListArticle: state => state.article
    }),
    havaData() {
        return this.todoListArticle[0] !== undefined ? true : false
    }
  }, 
  components: {
    addArticle,
    changeArticle
  },
  methods: {
    ...mapMutations({
      finishArticle: "finishArticle",
      deleteArticle: "deleteArticle"
    }),
    articleClick() {
      this.isActive = !this.isActive
    },
    addArticleClick() {
      this.addArticle = !this.addArticle
    },
    changeArticleClick() {
      this.changeArticle = !this.changeArticle
    },
    deleteArticleClick(id) {
      this.deleteArticle({
        id: id
      })
    },
    clickToChange(id) {
      this.changeId = id
      this.changeArticle = !this.changeArticle
    }
  },
  mounted () {
      console.log(this.todoListArticle)
  }
}
</script>
