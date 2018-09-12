import Taro, { Component } from "@tarojs/taro";
import { View,Text } from "@tarojs/components";
import { AtButton,AtInput, AtForm, AtList, AtListItem,AtCard } from 'taro-ui'
import ListItem from "../../components/list-item/index";

import './index.scss';
export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '职位列表',
    enablePullDownRefresh: false
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
        {/* <Text onClick={this.onClick}>列表页</Text>
         <ListItem position={positionObj}/>
         <AtButton type='primary'>按钮文案</AtButton> */}
         <AtForm className='formBox'>
            <AtInput
              name='value1'
              title='姓名'
              type='text'
              placeholder='请输入姓名'
              value={this.state.value1}
              onChange={this.handleChange}
            />
            <AtInput
              name='value2'
              title='手机号码'
              type='number'
              placeholder='请输入电话'
              value={this.state.value2}
              onChange={this.handleChange}
            />
            <AtInput
              name='value2'
              title='证件号码'
              type='number'
              placeholder='请输入证件号码'
              value={this.state.value2}
              onChange={this.handleChange}
            />
            <AtInput
              name='value3'
              title='业务种类'
              type='text'
              placeholder='请选择业务种类'
              value={this.state.value3}
              onChange={this.handleChange}
            />
            <AtInput
              name='value4'
              title='期限'
              type='idcard'
              placeholder='请选择期限'
              value={this.state.value4}
              onChange={this.handleChange}
            />
            <AtInput
              name='value5'
              title='申请金额'
              type='digit'
              placeholder='请输入金额'
              value={this.state.value5}
              onChange={this.handleChange}
            >
              <Text>元</Text>
            </AtInput>
            <AtInput
              name='value6'
              border={false}
              title='期望放款时间'
              type='date'
              placeholder='请选择时间'
              value={this.state.value6}
              onChange={this.handleChange}
            />
          </AtForm>
          <AtList>
            <AtListItem title='抵押物信息' arrow='right' extraText='添加' onClick={this.handleClick} />
          </AtList>
          <AtCard
            note='小Tips'
            extra='额外信息'
            title='这是个标题'
            thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          >
            这也是内容区 可以随意定义功能
          </AtCard>
      </View>
    )
  }
}

