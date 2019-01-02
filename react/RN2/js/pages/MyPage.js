import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import actions from "../action";
import NavigationUtil from "../navigator/NavigationUtil";
import NavigationBar from '../common/NavigationBar';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {};
const THEME_COLOR = '#678';
class MyPage extends Component<Props> {
  renderRightButton() {
    return <TouchableOpacity
      onPress={() => {}}>
      <View style={{padding: 5, marginRight: 8}}>
        <Ionicons
          name={'ios-search'}
          size={24}
          style={{
            marginRight: 8,
            alignSelf: 'center',
            color: 'white',
          }}/>
      </View>
    </TouchableOpacity>
  }
  renderLeftButton(callback) {
    return <TouchableOpacity
      onPress={callback}>
      <View style={{padding: 5, marginLeft: 8}}>
        <Ionicons
          name={'ios-arrow-back'}
          size={24}
          style={{
            marginRight: 8,
            alignSelf: 'center',
            color: 'white',
          }}/>
      </View>
    </TouchableOpacity>
  }
  render() {
    const {navigation} = this.props;
    let statusBar = {
      backgroundColor: THEME_COLOR,
      barStyle: 'light-content',
    };
    let navigationBar =
      <NavigationBar
        title={'我的'}
        statusBar={statusBar}
        style={{backgroundColor:THEME_COLOR}}
        rightButton={this.renderRightButton()}
        leftButton={this.renderLeftButton()}
      />;
    return (
      <View style={styles.container}>
        {navigationBar}
        <Text style={styles.welcome}>Welcome MyPage!</Text>
        <Button title="改变主题颜色"
                onPress={() => {
                  this.props.onThemeChange('#880b02')
                }}/>
        <Text onPress={() => {
          NavigationUtil.goPage({
            navigation: this.props.navigation
          },'DetailPage')
        }}>跳转到详情页</Text>
        <Button title={"Fetch Demo"} onPress={() => {
          NavigationUtil.goPage({
            navigation: this.props.navigation
          },'FetchDemoPage')
        }}/>
        <Button title={"AsyncStorageDemoPage"} onPress={() => {
          NavigationUtil.goPage({
            navigation: this.props.navigation
          },'AsyncStorageDemoPage')
        }}/>
        <Button title={"离线缓存框架"} onPress={() => {
          NavigationUtil.goPage({
            navigation: this.props.navigation
          },'DataStoreDemoPage')
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme))
});
export default connect(mapStateToProps,mapDispatchToProps)(MyPage);
