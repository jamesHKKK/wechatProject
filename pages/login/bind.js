// pages/user/index.js
const app = getApp()
const util = app.globalData.util
const http = app.globalData.http
const config = app.globalData.config
const url = config.urls
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scenes:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    const scene = decodeURIComponent(query.scene)
    this.setData({
      scenes:scene
    })

  },
  bindLogin:function(){
    let self = this
    let pathUrl = url.BIND_BIND;
    let datas = {
      "userId":this.data.scenes
    }
    util.hideError(self);
    http.post(pathUrl, datas, {
      success(res) {
        if(res.code==200){
          wx.showToast({
            title: '绑定成功',
            icon: 'success',
            duration: 2000//持续的时间
          });
          wx.switchTab({
              url: '/pages/index/index'
          })
        }
      },
      fail() {}
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})