//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Home Page',
    items: [
      {
        "component": "search-component",
        "data": {
          "placeholder": "请输入关键字",
          "inputBackground": "#ffffff",
          "background": "#ffffff",
          "borderColor": "#f2f2f2"
        }
      },
      {
        "component": "carousel-component",
        "data": {
          "images": [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557481790&di=2fff02f1a85f7dbef72310184315b5fe&imgtype=jpg&er=1&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F23%2F602209f725662359c7d155eacb6e6832.jpg",
            "https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b999a9014c086e066e53abf709087bf40bd1cb97.jpg"
          ],
          "height": 180
        }
      },
      {
        "component": "navigation-component",
        "data": {
          "items": [
            {
              "icon": "all",
              "label": "类目1",
              "background": ""
            },
            {
              "icon": "all",
              "label": "类目2",
              "background": ""
            },
            {
              "icon": "all",
              "label": "类目3",
              "background": ""
            },
            {
              "icon": "all",
              "label": "类目4",
              "background": ""
            },
            {
              "icon": "all",
              "label": "类目5",
              "background": ""
            },
            {
              "icon": "all",
              "label": "类目6",
              "background": ""
            },
            {
              "icon": "all",
              "label": "类目7",
              "background": ""
            },
            {
              "icon": "all",
              "label": "类目8",
              "background": ""
            },
            {
              "icon": "all",
              "label": "类目9",
              "background": ""
            },
            {
              "icon": "all",
              "label": "类目10",
              "background": ""
            }
          ],
          "col": 5,
          "background": "#ffffff",
          "color": "#4a4a4a"
        }
      },
      {
        "component": "empty-component",
        "data": {
          "height": 16,
          "background": "#f4f4f4"
        }
      },
      {
        "component": "title-component",
        "data": {
          "title": "主标题",
          "description": "副标题",
          "flow": "row"
        }
      },
      {
        "component": "picture-component",
        "data": {
          "background": "",
          "picture": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3148556183,583166598&fm=27&gp=0.jpg",
          "caption": "描述文字",
          "textAlign": "left",
          "padding": 10,
          "height": 180,
          "fontSize": 12
        }
      },
      {
        "component": "empty-component",
        "data": {
          "height": 16,
          "background": "#f4f4f4"
        }
      },
      {
        "component": "title-component",
        "data": {
          "title": "主标题",
          "description": "副标题",
          "flow": "row"
        }
      },
      {
        "component": "video-component",
        "data": {
          "video": "/media/exampleVideo.mp4",
          "caption": "描述文字",
          "color": "",
          "background": "",
          "fontSize": 14,
          "textAlign": "left",
          "padding": 10
        }
      },
      {
        "component": "empty-component",
        "data": {
          "height": 16,
          "background": "#f4f4f4"
        }
      },
      {
        "component": "title-component",
        "data": {
          "title": "主标题",
          "description": "副标题",
          "flow": "row"
        }
      },
      {
        "component": "goodslist-component",
        "data": {
          "layout": "wrap",
          "items": [
            {
              "picture": "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1556897335&di=1bc15f792971e1a0b60dfe6f1e88cc5c&src=http://pic.ffpic.com/files/2013/1215/1213gqzrjsdq8.jpg",
              "title": "这是一个标题",
              "desc": "这是一个简介",
              "price": "¥100.00"
            },
            {
              "picture": "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1556897574&di=3f4dd19fef3220bccb4fb2b6fd9ae9cd&src=http://pic.ffpic.com/files/2014/0704/0704jdhgqsjbz4.jpg",
              "title": "这是一个标题",
              "desc": "这是一个简介",
              "price": "¥100.00"
            }
          ],
          "background": "",
          "titleFontSize": 14,
          "descFontSize": 12,
          "priceFontSize": 14,
          "titleTextAlign": "left",
          "descTextAlign": "left",
          "priceTextAlign": "left",
          "titleColor": "#202020",
          "descColor": "#9b9b9b",
          "priceColor": "#ff5722",
          "titleFontWeight": "bold",
          "descFontWeight": "normal",
          "priceFontWeight": "bold"
        }
      },
      {
        "component": "fixedicon-component",
        "data": {
          "items": [
            {
              "icon": "share",
              "text": "分享",
              "background": "",
              "color": ""
            }
          ]
        }
      }
    ]
  },
  onLoad: function () {
  },
  onReady: function() {
  }
})
