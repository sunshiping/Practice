import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

if (process.env.TARO_ENV === 'weapp') {
  // require('taro-ui/dist/weapp/css/index.css')
} else if (process.env.TARO_ENV === 'h5') {
  // require('taro-ui/dist/h5/css/index.css')
}


const store = configStore()

class App extends Component {
  config: Config = {
    pages: [
      'pages/mine/index',
      'pages/index/index',
      'pages/company/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/index/index",
          text: "职位",
          iconPath: "./asset/images/tabbar/icon-position.png",
          selectedIconPath: "./asset/images/tabbar/icon-position-active.png"
        },
        {
          pagePath: "pages/company/index",
          text: "公司",
          iconPath: "./asset/images/tabbar/icon-enterprise.png",
          selectedIconPath: "./asset/images/tabbar/icon-enterprise-active.png"
        },
        {
          pagePath: "pages/mine/index",
          text: "我的",
          iconPath: "./asset/images/tabbar/icon-person.png",
          selectedIconPath: "./asset/images/tabbar/icon-person-active.png"
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
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
