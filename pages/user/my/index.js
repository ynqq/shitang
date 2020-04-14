// pages/shop/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        text: "修改个人信息",
        path: "/pages/user/updateUser/index"
      },
      {
        text: "我的评价",
        path: "/pages/user/wodepingjia/index"
      }
    ]
  },
  handle(item) {
    console.warn(item)
    let url = this.data.list[item.currentTarget.dataset.index].path
    wx.navigateTo({
      url: url,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideTabBar({

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

  }
})