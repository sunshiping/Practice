import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'
     
const store = configStore()

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}
class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/mine/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "color": "#626567",
      "selectedColor": "#2A8CE5",
      "backgroundColor": "#FBFBFB",
      "borderStyle": "#e1e1e1",
      "list": [{
        "pagePath": "pages/index/index",
        "iconPath": "./asset/images/tabbar/icon-position.png",
        "selectedIconPath": "./asset/images/tabbar/icon-position-active.png",
        "text": "首页"
      }, {
        "pagePath": "pages/mine/index",
        "iconPath": "./asset/images/tabbar/icon-person.png",
        "selectedIconPath": "./asset/images/tabbar/icon-person-active.png",
        "text": "我的"
      }]
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
