const util = require('util.js')
const config = require('config.js')
const login = require('login.js') 
const url = config.urls
let token = ''

function httpGet(url, params, callback, nullAble) {
  token = wx.getStorageSync(config.keys.token) //每次都需要直接取缓存token，因为token会失效，但是前端并不知道token会失效
  if (util.isBlank(nullAble)) {
    nullAble = false;
  }
  if (util.isBlank(token) && !nullAble) {
    wx.hideLoading();
    wx.navigateTo({
      url: '/pages/index/index',
    })
    login.getToken();
    return;
  }
  getSend(url, 'GET', params, callback);
}

function httpPost(url, params, callback, nullAble) {
  token = wx.getStorageSync(config.keys.token);
  if (util.isBlank(nullAble)) {
    nullAble = false;
  }
  if (util.isBlank(token) && !nullAble) {
    wx.hideLoading();
    wx.navigateTo({
      url: '/pages/index/index',
    })
    login.getToken();
    return;
  }
  postSend(url, 'POST', params, callback);
}

function httpPut(url, params, callback, nullAble) {
  token = wx.getStorageSync(config.keys.token);
  if (util.isBlank(nullAble)) {
    nullAble = false;
  }
  if (util.isBlank(token) && !nullAble) {
    wx.hideLoading();
    wx.navigateTo({
      url: '/pages/index/index',
    })
    login.getToken();
    return;
  }
  putSend(url, 'PUT', params, callback);
}
function httpDelete(url, params, callback, nullAble) {
  token = wx.getStorageSync(config.keys.token);
  if (util.isBlank(nullAble)) {
    nullAble = false;
  }
  if (util.isBlank(token) && !nullAble) {
    wx.hideLoading();
    wx.navigateTo({
      url: '/pages/index/index',
    })
    login.getToken();
    return;
  }
  deleteSend(url, 'DELETE', params, callback);
}
function getSend(url, method, params, callback) {
  wx.request({
    url: url,
    data: params,
    method: method,
    dataType: 'json',
    header: {
      'Authorization': token, //token
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    success: res => {
      if (res.statusCode == 200) {
        if (typeof res.data == 'string') { //返回结果为String时，转为Json
          let data = String(res.data).replace(/\s/g, '');
          res.data = JSON.parse(data)
        }
        let code = res.data.code
        let msg =''
        if(code == 200) {
          callback.success(res.data)
        } else if(code == 500) {
          callback.fail(res.data)
          msg = '服务器异常，请稍后重试'
        } else if(code == 10002) { //账号在其他地方登录
          callback.fail(res.data)
          wx.switchTab({
            url: '/pages/index/index'
          })
          login.getToken();
        }
        if(msg.length > 0) {
          wx.showToast({
            title: msg,
            duration: '2000',
            icon: 'none'
          })
        }
      } else {
        // console.log('statusCode:' + res.statusCode)
        callback.fail()
        wx.showToast({
          icon: 'none',
          duration: 2000,
          title: '网络异常，请稍候重试'
        })
      }
      // console.log(url)
      // console.log(res)
    },
    fail: res => {
      callback.fail(res)
      // console.log(url)
      // console.log(res)
      wx.showToast({
        icon: 'none',
        title: '请求失败，请稍候重试'
      })
    }
  })
}

function postSend(url, method, params, callback) {
  wx.request({
    url: url,
    data: params,
    method: method,
    dataType: 'json',
    header: {
      'Authorization': token, //token
      'Content-Type': 'application/json'
    },
    success: res => {
      if (res.statusCode == 200) {
        if (typeof res.data == 'string') { //返回结果为String时，转为Json
          let data = String(res.data).replace(/\s/g, '');
          res.data = JSON.parse(data)
        }
        let code = res.data.code
        let msg =''
        if(code == 200) {
          callback.success(res.data)
        } else if(code == 500) {
          callback.fail(res.data)
          msg = '服务器异常，请稍后重试'
        } else if(code == 10002) { //账号在其他地方登录
          callback.fail(res.data)
          wx.switchTab({
            url: '/pages/index/index'
          })
          login.getToken();
        }
        if(msg.length > 0) {
          wx.showToast({
            title: msg,
            duration: '2000',
            icon: 'none'
          })
        }
      } else {
        // console.log('statusCode:' + res.statusCode)
        callback.fail()
        wx.showToast({
          icon: 'none',
          duration: 2000,
          title: '网络异常，请稍候重试'
        })
      }
      // console.log(url)
      // console.log(res)
    },
    fail: res => {
      callback.fail(res)
      // console.log(url)
      // console.log(res)
      wx.showToast({
        icon: 'none',
        title: '请求失败，请稍候重试'
      })
    }
  })
}

function putSend(url, method, params, callback) {
  wx.request({
    url: url,
    data: params,
    method: method,
    dataType: 'json',
    header: {
      'Authorization': token, //token
      'Content-Type': 'application/json'
    },
    success: res => {
      if (res.statusCode == 200) {
        if (typeof res.data == 'string') { //返回结果为String时，转为Json
          let data = String(res.data).replace(/\s/g, '');
          res.data = JSON.parse(data)
        }
        let code = res.data.code
        let msg =''
        if(code == 200) {
          callback.success(res.data)
        } else if(code == 500) {
          callback.fail(res.data)
          msg = '服务器异常，请稍后重试'
        } else if(code == 10002) { //账号在其他地方登录
          callback.fail(res.data)
          wx.switchTab({
            url: '/pages/index/index'
          })
          login.getToken();
        }
        if(msg.length > 0) {
          wx.showToast({
            title: msg,
            duration: '2000',
            icon: 'none'
          })
        }
      } else {
        // console.log('statusCode:' + res.statusCode)
        callback.fail()
        wx.showToast({
          icon: 'none',
          duration: 2000,
          title: '网络异常，请稍候重试'
        })
      }
      // console.log(url)
      // console.log(res)
    },
    fail: res => {
      callback.fail(res)
      // console.log(url)
      // console.log(res)
      wx.showToast({
        icon: 'none',
        title: '请求失败，请稍候重试'
      })
    }
  })
}
function deleteSend(url, method, params, callback) {
  wx.request({
    url: url,
    data: params,
    method: method,
    dataType: 'json',
    header: {
      'Authorization': token, //token
      'Content-Type': 'application/json'
    },
    success: res => {
      if (res.statusCode == 200) {
        if (typeof res.data == 'string') { //返回结果为String时，转为Json
          let data = String(res.data).replace(/\s/g, '');
          res.data = JSON.parse(data)
        }
        let code = res.data.code
        let msg =''
        if(code == 200) {
          callback.success(res.data)
        } else if(code == 500) {
          callback.fail(res.data)
          msg = '服务器异常，请稍后重试'
        } else if(code == 10002) { //账号在其他地方登录
          callback.fail(res.data)
          wx.switchTab({
            url: '/pages/index/index'
          })
          login.getToken();
        }
        if(msg.length > 0) {
          wx.showToast({
            title: msg,
            duration: '2000',
            icon: 'none'
          })
        }
      } else {
        // console.log('statusCode:' + res.statusCode)
        callback.fail()
        wx.showToast({
          icon: 'none',
          duration: 2000,
          title: '网络异常，请稍候重试'
        })
      }
      // console.log(url)
      // console.log(res)
    },
    fail: res => {
      callback.fail(res)
      // console.log(url)
      // console.log(res)
      wx.showToast({
        icon: 'none',
        title: '请求失败，请稍候重试'
      })
    }
  })
}
module.exports = {
  get: httpGet,
  post: httpPost,
  put: httpPut,
  delete:httpDelete
}
