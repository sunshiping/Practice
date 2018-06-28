/**
 * Created by sunshiping on 2018/6/28.
 */
import React from 'react';
import {Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomePage from './../js/pages/HomePage'
import Page1 from './../js/pages/Page1'
import Page2 from './../js/pages/Page2'
import Page3 from './../js/pages/Page3'
export const AppStackNavigator = StackNavigator({
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
    }
},{
    navigationOptions:{
       // header:null //禁用导航栏
    }
})
