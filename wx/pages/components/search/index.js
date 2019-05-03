// pages/components/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    'data': {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    search: (e) => {
      var keyword = e.detail.value;
      wx.showModal({
        'title': "搜索" + keyword
      });
    }
  },
})
