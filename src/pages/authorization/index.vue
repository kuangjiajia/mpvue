<template lang="pug">
  button(open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGetUserInfo") 点击授权

</template>

<style lang="stylus" scoped>

</style>


<script>
export default {
  methods: {
    bindViewTap () {
      const url = '../login/main'
      wx.navigateTo({ url })
    },
  },
  onGetUserInfo (res) {
    wx.setStorageSync("userInfo",res.detail)
    this.bindViewTap()
  }
}
</script>