import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, Button} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmout () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>hello word!</Text>
      </View>
    )
  }
}

