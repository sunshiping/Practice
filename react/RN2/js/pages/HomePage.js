import React, {Component} from 'react';
import {NavigationActions,SafeAreaView} from "react-navigation";
import {BackHandler} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
import {connect} from 'react-redux';

type Props = {};

class HomePage extends Component<Props> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if(nav.routes[1].index === 0){
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };
  constructor(props){
    super(props);
    console.disableYellowBox = true
  }
  render() {
    NavigationUtil.navigation = this.props.navigation;
    return<DynamicTabNavigator/>
  }
}
const mapStateToProps = state => ({
  nav: state.nav
});
export default connect(mapStateToProps)(HomePage);
