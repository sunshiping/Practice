/**
 * Created by sunshiping on 2018/6/28.
 */
import React from 'react';
import {Button,Image,StyleSheet,ScrollView} from 'react-native';
import { StackNavigator,createBottomTabNavigator,TabBarBottom, createDrawerNavigator,DrawerItems,SafeAreaView } from 'react-navigation';
import Splash from './../js/pages/Splash'
import HomePage from './../js/pages/HomePage'
import Page1 from './../js/pages/Page1'
import Page2 from './../js/pages/Page2'
import Page3 from './../js/pages/Page3'
import Page4 from './../js/pages/Page4'
import Page5 from './../js/pages/Page5'
import FetchTest from './../FetchTest'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export const DrawerNav = createDrawerNavigator({
    Page4:{
        screen:Page4,
        navigationOptions:{
            drawerLabel:'Page4',
            drawerIcon:({tintColor,focused})=>{
                return<Image style={{width:20,height:20,tintColor:tintColor}} source={require('./../res/images/ic_my.png')}/>
            }
        }
    },
    Page5:{
        screen:FetchTest,
        navigationOptions:(props)=>{
            const {navigation} = props;
            const {state,setParams} = navigation;
            const {params} = state;
            return {
                title:params.title?params.title:'This is Page5',
                drawerLabel:'Page5',
                drawerIcon:(tintColor)=>{
                    <MaterialIcons
                        IconName={"drafts"}
                        size={24}
                        style={{color:tintColor}}
                    />
                }
            }
        }
    }
},{
    drawerWidth:200,
    drawerBackgroundColor:'#ccc',
    drawerPosition: 'right',
    contentOptions: {
        activeTintColor: 'red',
    },
    contentComponent:(props) =>(
        <ScrollView style={{backgroundColor:'red'}}>
            <SafeAreaView>
                <DrawerItems {... props} />
            </SafeAreaView>
        </ScrollView>
    )
})
export const AppTabNavigator = createBottomTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            tabBarLabel:'Page1',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-home':'ios-home-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel:'Page2',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-people':'ios-people-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            tabBarLabel:'Page3',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-planet':'ios-planet-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
},
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        tabBarOptions: {
            // activeTintColor: '#D3D2D3',
            // inactiveTintColor: '#605F60',
            inactiveBackgroundColor: '#fff',
            activeBackgroundColor: '#fff',
            labelStyle: {
                fontSize: 10,
                paddingBottom: 3,
            },
            style: {
                backgroundColor: '#fff',
            },
        },
        showIcon: false,
        swipeEnabled: false,
    })
export const AppStackNavigator = StackNavigator({
    Splash: {
        screen: Splash, // 界面
        navigationOptions: {
            header: null // 无标题栏
        }
    },
    HomePage: {
        screen: HomePage,
        navigationOptions:{
            title:'Home'
        }
    },
    Page1: {
        screen: Page1
    },
    Page2: {
        screen: Page2,
        navigationOptions:({navigation})=>({
            title:`${navigation.state.params.name}页面`
        })
    },
    Page3: {
        screen: Page3,
        navigationOptions:(props)=>{
            const {navigation} = props;
            const {state,setParams} = navigation;
            const {params} = state;
            return {
                title:params.title?params.title:'Page3',
                headerRight:(
                    <Button title={params.mode==='edit'?'保存':'编辑'}
                    onPress={()=>{
                        setParams({mode:params.mode==='edit'?'':'edit'})
                    }}
                    />
                )
            }
        }
    },
    TabNav:{
        screen:AppTabNavigator,
        navigationOptions:{
            title:'This is TabNavigator'
        }
    },
    DrawerNav:{
        screen:DrawerNav,
        navigationOptions:(props)=>{
            const {navigation} = props;
            const {state,setParams} = navigation;
            const {params} = state;
            return {
                title:params.title?params.title:'This is DrawerNav',
            }
        }
    }
},
    {
        initialRouteName: 'Splash',
        mode: 'card',
        // headerMode: 'none',//禁用导航栏
    },
    {
    navigationOptions:{
       // header:null //禁用导航栏
    }
})
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
