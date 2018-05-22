import { userInfo } from "os";

class API {
    Login() {
        wx.checkSession({
            fail: () => { //session_key 已经失效或者没有，需要重新执行登录流程
                wx.login({
                    success: (res) => {
                      wx.request({
                        url: "https://kuangjiajia.cn/login",
                        data: {
                          code: res.code
                        },
                        success: (res) => {
                          wx.setStorage({
                            key: "authtoken",
                            data: res.header.authtoken
                          })
                        }
                      })
                    }
                })
            }
        })
    }
    getUserInfo() {
        return new Promise((resolve,reject) => {
            wx.checkSession({
                success: res => {
                    // if (res.authSetting['scope.userInfo']) {
                        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                        wx.getUserInfo({
                            success: userInfo => {
                                resolve(userInfo)
                            }
                        })
                    // }
                }
            })
        })
    }
}

export default new API()