const app = getApp()
const util = app.globalData.util
const http = app.globalData.http
const config = app.globalData.config
const url = config.urls

function getAliConfig() {
  let pathUrl = url.ALI_STS
  return new Promise (function(resove, reject) {
    http.post(pathUrl, {}, {
      success(res) {
        // console.log('阿里获取', res)
        resove(res.data)
      },
      fail() {
        wx.hideLoading()
      }
    })
  })
}

module.exports = {
  getAliConfig
}
