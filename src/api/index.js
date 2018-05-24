import { userInfo } from "os";

class API {
    launch() {
        return new Promise((resolve,reject) => {
            // wx.checkSession({
                // fail: () => {
                    wx.login({
                        success: (res) => {
                            if(res.code) {
                                wx.request({
                                    url: "https://kuangjiajia.cn/login",
                                    data: {
                                        code: res.code
                                    },
                                    success: (res) => {
                                        resolve(res)
                                    }
                                })
                            }
                        }
                    })
                // }
            // })
        })
    }
    getUserInfo() {
        return new Promise((resolve,reject) => {
            wx.checkSession({
                success: res => {
                    wx.getUserInfo({
                        success: userInfo => {
                            resolve(userInfo)
                        }
                    })
                }
            })
        })
    }
    register (encryptedData,iv) {
        return new Promise((resolve,reject) => {
            wx.request({
                url: "https://kuangjiajia.cn/register",
                method: "POST",
                data: {
                    userName: "kuangjiajia",
                    encryptedData: encryptedData,
                    iv: iv
                },
                header: {
                    "authtokens": wx.getStorageSync("authtokens"),
                },
                success: res => {
                    resolve(res)
                }
            })
        })
    }
}

export default new API()