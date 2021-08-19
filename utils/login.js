const config = require('./config.js')
const util = require('./util.js')

function getToken() {
  wx.login({
    success: res => {
      // let pathUrl = config.urls.USER_LOGIN
      let pathUrl = '';
      wx.request({
        url: pathUrl,
        data: {
          code: res.code
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        success: res => {
          // console.log(res)
          let token = res.data.data
          wx.setStorageSync(config.keys.token, token)
          // console.log('token:' + token)
        }
      })
    }
  })
}

module.exports = {
  getToken
}