/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, ActivityIndicator, View, FlatList, RefreshControl,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index'
import {
  createMaterialTopTabNavigator,
  SafeAreaView
} from 'react-navigation';
import Toast from 'react-native-easy-toast'
import NavigationUtil from '../navigator/NavigationUtil'
import NavigationBar from '../common/NavigationBar';
import TrendingItem from '../common/TrendingItem';
import Ionicons from 'react-native-vector-icons/Ionicons'


type Props = {};
const URL = 'https://github.com/trending/';
const THEME_COLOR = '#678';
export default class TrendingPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.tabNames = ['All','C#','PHP','JavaScript'];
  }
  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item,index) => {
      tabs[`tab${index}`] = {
        screen: props => <TrendingTabPage {...props} tabLabel = {item}/>,
        navigationOptions:{
          title: item
        }
      }
    });
    return tabs;
  }
  renderRightButton() {
    const {theme} = this.props;
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
  render() {
    let statusBar = {
      backgroundColor: THEME_COLOR,
      barStyle: 'light-content',
    };
    let navigationBar = <NavigationBar
      title={'趋势'}
      statusBar={statusBar}
      style={{backgroundColor:THEME_COLOR}}
      rightButton={this.renderRightButton()}
    />;
    const TabNavigator = createMaterialTopTabNavigator(
      this._genTabs(),{
        tabBarOptions:{
          tabStyle: styles.tabStyle,
          upperCaseLabel: false, //是否使标签大写 默认：true
          scrollEnabled: true,  //是否支持选项卡滚动  默认：false
          style:{
            backgroundColor: '#678'  //tabBar背景色
          },
          indicatorStyle: styles.indicatorStyle,  //标签指示器样式
          labelStyle: styles.labelStyle   //文字样式
        }
      }
    );
    return (
      <SafeAreaView style={{flex:1}}>
        {navigationBar}
        <TabNavigator/>
      </SafeAreaView>
    )
  }
}
const pageSize = 10; //设置常量，防止修改
class TrendingTab extends Component<Props> {
  constructor(props){
    super(props);
    const {tabLabel} = this.props;
    this.storeName = tabLabel;
  }
  componentDidMount(){
    this.loadData()
  }
  loadData(loadMore){
    const {onRefreshTrending, onLoadMoreTrending} = this.props;
    const store = this._store();
    const url = this.genFetchUrl(this.storeName);
    if (loadMore) {
      onLoadMoreTrending(this.storeName, ++store.pageIndex, pageSize, store.items, callback => {
        this.refs.toast.show('没有更多了');
      })
    }else {
      onRefreshTrending(this.storeName, url, pageSize)
    }

  }
  _store() {
    const {trending} = this.props;
    let store = trending[this.storeName];
    if (!store) {
      store = {
        items: [],
        isLoading: false,
        projectModels: [],//要显示的数据
        hideLoadingMore: true,//默认隐藏加载更多
      }
    }
    return store;
  }
  genFetchUrl(key){
    return URL + key + '?since=daily';
  }
  renderItem(data){
    const item = data.item;
    return <TrendingItem
      item={item}
      onSelect={()=>{

      }}/>
  }
  genIndicator() {
    return this._store().hideLoadingMore ? null :
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          style={styles.indicator}
        />
        <Text>正在加载更多</Text>
      </View>
  }
  render() {
    let store = this._store();
    return(
      <View style={styles.container}>
        <FlatList
          data={store.projectModels}
          ref='flatList'
          renderItem={data => this.renderItem(data)}
          keyExtractor= {item => ""+(item.id || item.fullName)}
          refreshControl={
            <RefreshControl
              title={'Loading'}
              titleColor={THEME_COLOR}
              colors={[THEME_COLOR]}
              refreshing={store.isLoading}
              onRefresh={()=>this.loadData()}
              tintColor={THEME_COLOR}
            />
          }
          ListFooterComponent={()=>this.genIndicator()}
          onEndReached={()=>{
            setTimeout(()=>{
              if(this.canLoadMore){
                console.log('-------onEndReached---------');
                this.loadData(true);
                this.canLoadMore = false;
              }
            },100);
          }}
          onEndReachedThreshold={0.5}
          onMomentumScrollBegin={()=>{
            this.canLoadMore = true;
            console.log('-------onMomentumScrollBegin---------');
          }}
        />
        <Toast
          ref={'toast'}
          position={'center'}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  trending: state.trending
});
const mapDispatchToProps = dispatch => ({
  // onLoadPopularData: (storeName,url,pageSize)=>dispatch(actions.onLoadPopularData(storeName,url,pageSize)),
  onRefreshTrending: (storeName, url, pageSize) => dispatch(actions.onRefreshTrending(storeName, url, pageSize)),
  onLoadMoreTrending: (storeName, pageIndex, pageSize, items, favoriteDao, callBack) => dispatch(actions.onLoadMoreTrending(storeName, pageIndex, pageSize, items, favoriteDao, callBack)),
  // onFlushPopularFavorite: (storeName, pageIndex, pageSize, items, favoriteDao) => dispatch(actions.onFlushPopularFavorite(storeName, pageIndex, pageSize, items, favoriteDao)),
});
//注意：connect只是个function，并不应定非要放在export后面
const TrendingTabPage = connect(mapStateToProps, mapDispatchToProps)(TrendingTab);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabStyle:{
    minWidth: 50,
  },
  indicatorStyle:{
    height:2,
    backgroundColor:'#fff'
  },
  labelStyle:{
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  indicatorContainer:{
    alignItems: 'center'
  },
  indicator:{
    color:'red',
    margin: 10
  }
});
