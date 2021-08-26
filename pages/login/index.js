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
    typeOption:"password",
    userpassword:"",
    username:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    const scene = decodeURIComponent(query.scene)
    wx.setNavigationBarTitle({
      title: '',
      success:function(){
      }
    })
    this.setData({
      scenes:scene
    })
  },
  queryLogin:function(){
    wx.switchTab({
      url: '/pages/index/index'
   })
    // let self = this
    // let pathUrl = url.LOGIN_LOGIN;
    // let datas = {
    //   "uuid":this.data.scenes
    // }
    // util.hideError(self);
    // http.post(pathUrl, datas, {
    //   success(res) {
    //     if(res.code==200){
    //       wx.showToast({
    //         title: '登录成功',
    //         icon: 'success',
    //         duration: 2000//持续的时间
    //       });
    //       wx.switchTab({
    //           url: '/pages/index/index'
    //       })
    //     }
    //   },
    //   fail() {}
    // })
  },
  btnclick:function(){
    this.setData({ typeOption: this.data.typeOption == "password" ? "text" : "password"});
    console.log(this.data.typeOption)
  },
  loginName:function(e){
    this.setData({
      username: e.detail.value
    })
  },
  loginPassword:function(e){
    this.setData({
      userpassword: e.detail.value
    })
  },
  cancel:function(){

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