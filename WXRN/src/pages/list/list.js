import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './list.scss'

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
        <Text>Hello world!12233333333333</Text>
      </View>
    )
  }
}

