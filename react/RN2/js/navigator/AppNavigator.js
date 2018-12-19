import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import WelcomePage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';

const InitNavigator = createStackNavigator({
  WelcomePage:{
    screen: WelcomePage,
    navigationOptions:{
      header: null   //禁用StackNavigator  status状态栏
    }
  }
})

const MainNavigator = createStackNavigator({
  HomePage:{
    screen: HomePage,
    navigationOptions:{
      header: null   //禁用StackNavigator  status状态栏
    }
  },
  DetailPage:{
    screen: DetailPage,
    navigationOptions:{
     // header: null   //禁用StackNavigator  status状态栏
    }
  }
})
export default createSwitchNavigator({
  Init:InitNavigator,
  Main:MainNavigator,
},{
  navigationOptions:{
    header: null   //禁用StackNavigator  status状态栏
  }
})
