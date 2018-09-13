import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton } from 'taro-ui'

import './index.scss'

class Mine extends Component {

    config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='mine'>
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View> */}
        <AtButton type='primary'>按钮文案</AtButton>
        <View className='at-row'>
          <View className='at-col'>A</View>
          <View className='at-col'>B</View>
          <View className='at-col'>C</View>
        </View>
      </View>
    )
  }
}

export default Mine
