import React, {Component} from 'react';
import {
  createBottomTabNavigator
} from 'react-navigation';
import {Platform, StyleSheet, Text, View} from 'react-native';


type Props = {};
import PopularPage from '../pages/PopularPage'
import TrendingPage from '../pages/TrendingPage'
import FavoritePage from '../pages/FavoritePage'
import MyPage from '../pages/MyPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { BottomTabBar } from "react-navigation-tabs";


const TABS = {
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: "最热",
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}}/>
      )
    }
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: "趋势",
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons name={'md-trending-up'} size={26} style={{color: tintColor}}/>
      )

    }
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: "收藏",
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name={'favorite'} size={26} style={{color: tintColor}}/>
      )
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: "我的",
      tabBarIcon: ({tintColor, focused}) => (
        <Entypo name={'user'} size={26} style={{color: tintColor}}/>
      )
    }
  }
};

export default class DynamicTabNavigator extends Component<Props> {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  _tabNavigator() {
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
    // PopularPage.navigationOptions.tabBarLabel = '最新'; //动态配置tab属性
    return createBottomTabNavigator(tabs, {
        tabBarComponent: TabBarComponent
      }
    )
  }

  render() {
    const Tab = this._tabNavigator();
    return <Tab/>
  }
}

class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime()
    }
  }
  render(){
    const {routes, index} = this.props.navigation.state;
    if(routes[index].params) {
      const {theme} = routes[index].params;
      if(theme && theme.updateTime > this.theme.updateTime){
        this.theme = theme
      }
    }

    return <BottomTabBar
      {...this.props}
      activeTintColor={this.theme.tintColor || this.props.activeTintColor}
    />
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
