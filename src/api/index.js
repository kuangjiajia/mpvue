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
    register (encryptedData,iv,username) {
        return new Promise((resolve,reject) => {
            wx.request({
                url: "https://kuangjiajia.cn/register",
                method: "POST",
                data: {
                    encryptedData: encryptedData,
                    iv: iv,
                    username: username
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
    getWeather () {
        return new Promise((resolve,reject) => {
            wx.request({
                url: "https://kuangjiajia.cn/getweather",
                data: {
                    city: "泸州"
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
    insertTodo (content) {
        return new Promise((resolve,reject) => {
            wx.request({
                url: "https://kuangjiajia.cn/insertTodo",
                method: "POST",
                data: {
                    content: content
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
    updateTodo (content) {
        return new Promise((resolve,reject) => {
            wx.request({
                url: "https://kuangjiajia.cn/updateTodo",
                method: "POST",
                data: {
                    content: content
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
    removeTodo (id) {
        return new Promise((resolve,reject) => {
            wx.request({
                url: "https://kuangjiajia.cn/removeTodo",
                method: "POST",
                data: {
                    content: {
                        id: id
                    }
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
    addArticle (content) {
        return new Promise((resolve,reject) => {
            wx.request({
                url: "https://kuangjiajia.cn/insertArticle",
                method: "POST",
                data: {
                    content: content
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
    updateArticle (content) {
        return new Promise((resolve,reject) => {
            wx.request({
                url: "https://kuangjiajia.cn/updateArticle",
                method: "POST",
                data: {
                    content: content
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