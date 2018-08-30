import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import ListItem from "../../components/list-item/index";

import './index.scss'

export default class Position extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '职位列表'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // onPositionClick(value) {
  //   debugger
  //   Taro.showToast({ title: "点击了" + value, icon: "success" });
  // }
  onClick(){
    Taro.showToast({ title: "点击了click", icon: "success" });
  }

  render () {
    const positionObj = { positionName: "列表页面组件" };
    return (
      <View className='index'>
      <Text onClick={this.onClick}>列表页</Text>
         <ListItem position={positionObj}/>
      </View>
    )
  }
}

