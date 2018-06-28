import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ListViewTest from './ListViewTest';
import FetchTest from './FetchTest'

export default class LotsOfStyles extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'tb_popular',
            number:3,
        }
    }

  render() {
    return (
      <View style={styles.container}>
          <TabNavigator>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_popular'}
                  selectedTitleStyle={{color:'red'}}
                  title="最热"
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
                  badgeText={this.state.number}
                  onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
                  <View style={styles.page1}>
                      <FetchTest/>
                  </View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_trending'}
                  selectedTitleStyle={{color:'green'}}
                  title="趋势"
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'green'}]} source={require('./res/images/ic_trending.png')} />}
                  onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
                  <View style={styles.page2}>
                      <ListViewTest/>
                  </View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_favorite'}
                  selectedTitleStyle={{color:'red'}}
                  title="收藏"
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_unstar_navbar.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_unstar_navbar.png')} />}
                  onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
                  <View style={styles.page1}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_my'}
                  selectedTitleStyle={{color:'green'}}
                  title="我的"
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'green'}]} source={require('./res/images/ic_my.png')} />}
                  onPress={() => this.setState({ selectedTab: 'tb_my' })}>
                  <View style={styles.page2}></View>
              </TabNavigator.Item>
          </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5fcff',
    },
    page1:{
        flex:1,
        backgroundColor:'red',
    },
    page2:{
        flex:1,
        backgroundColor:'green',
    },
    image:{
        width:22,
        height:22,
    }
});
AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);