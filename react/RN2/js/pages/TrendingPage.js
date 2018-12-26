import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index';
import { SafeAreaView } from 'react-navigation';
type Props = {};
class TrendingPage extends Component<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Welcome TrendingPage!</Text>
        <Button title="改变主题颜色"
                onPress={() => {
                  this.props.onThemeChange('#096')
                }}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
export default connect(mapStateToProps,mapDispatchToProps)(TrendingPage);
