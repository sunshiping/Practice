/**
 * Created by sunshiping on 2018/6/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'
type Props={};
export default class HomePage extends  Component<Props>{
    render(){
        const {navigation} =this.props;
        return<View style={styles.container}>
            <Text style={styles.font}>欢迎来到HomePage</Text>
            <Button title="Go To Page1" onPress={()=>{
                navigation.navigate('Page1')
            }}></Button>
            <Button title="Go To Page2" onPress={()=>{
                navigation.navigate('Page2')
            }}></Button>
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    font:{
        fontSize:20,
        textAlign:'center'
    }
})