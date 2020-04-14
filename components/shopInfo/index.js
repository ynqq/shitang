// components/shopInfo/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showIndex: 0,
    showModal: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleModal(){
      this.setData({
        showModal: !this.data.showModal
      })
    }
  }
})
