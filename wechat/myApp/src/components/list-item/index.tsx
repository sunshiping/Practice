import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

// import namedPng from "../../asset/images/user_avastr.png";

export default class ListItem extends Component {
  positionClick() {
    const { position } = this.props;
    // positionClick(position.positionName);
  }
  render() {
    return (
      <View className="list-item">
        <Text>{this.props.position.positionName}</Text>
      </View>
    );
  }
}
