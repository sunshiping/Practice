/**
 * Created by sunshiping on 2018/6/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    Platform,
    StyleSheet,
}from 'react-native';
function setup() {
    //进行初始化配置
    class Root extends Component{
        render(){
            return <Navigator/>
        }
    }
    return <Root/>
}