function update() {
  const updateManager = wx.getUpdateManager()
  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    // console.log("updateManager:", res.hasUpdate)
  })
  updateManager.onUpdateReady(function () {
    wx.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success(res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate()
        }
      }
    })
  })
  updateManager.onUpdateFailed(function () {
    // 新的版本下载失败
    wx.showModal({
      title: '失败提示',
      content: '新版本更新失败，是否重新更新',
      success(res) {
        if (res.confirm) {
          // 重新下载操作
          update()
        }
      }
    })
  })
}
module.exports.update = update;