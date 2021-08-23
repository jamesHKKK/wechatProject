// 小程序配置文件
const hostUrl = ""; //测试地址
// const hostUrl = ""; //正式地址
// const hostUrl = "";//本地地址

//请求地址
let urls = {
  USER_LOGIN: hostUrl + '/applet/login', //小程序登录
  WXQR_URL: hostUrl + '/applet/qr', //获取二维码
  //登录确认

  //指标相关

  //统计相关

  //预测相关

  //设置相关

}

//存储Key
const keys = {
  token: 'token',
  userInfo: 'userInfo',
  ossInfo: 'ossInfo'
}

module.exports = {
  urls,
  keys
}
