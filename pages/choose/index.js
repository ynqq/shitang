// pages/choose/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toUser(){
    wx.switchTab({
      url: '/pages/user/index/index',
    })
  },
  toShop(){
    wx.switchTab({
      url: '/pages/shop/order/index',
    })
  },

  getUserInfo(e) {
    console.warn(e)
    let type = e.target.dataset.type

    wx.getUserInfo({
      success(res) {
        if (type == 1) { //shangjia
          wx.showModal({
            title: '提示',
            content: '如果您有已注册的账号可以直接绑定',
            cancelText: "不绑定",
            confirmText: "去绑定",
            success(info) {
              if (info.confirm) {
                wx.navigateTo({
                  url: '/pages/registered/shopBind/index',
                })
              } else {
                wx.navigateTo({
                  url: '/pages/registered/shopReg/index',
                })
              }
            },
            fail() {

            }
          })
        } else {
          wx.navigateTo({
            url: '/pages/registered/userReg/index',
          })
        }
      },
      fail() {

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})