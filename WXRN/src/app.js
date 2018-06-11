import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'
class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/list/list'
    ],
    window: {
      backgroundTextStyle: "dark",
      enablePullDownRefresh: true,
      navigationBarTitleText: '房信网',
      navigationBarTextStyle: "black",
      navigationBarBackgroundColor: "#F8F8F8",
      backgroundColor: "#F8F8F8"
    },
    tabBar: {
      color: "#7A7E83",
      selectedColor: "#3cc51f",
      borderStyle: "black",
      backgroundColor: '#ffffff',
      position:'bottom',
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "images/icon_component.png",
          selectedIconPath: "images/icon_component_HL.png"
        },
        {
          pagePath: "pages/list/list",
          text: "搜索",
          iconPath: "images/icon_API.png",
          selectedIconPath: "images/icon_API_HL.png"
        },
        {
          pagePath: "pages/index/index",
          text: "我的",
          iconPath: "images/wechat.png",
          selectedIconPath: "images/wechatHL.png"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
