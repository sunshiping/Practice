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
export default class Page1 extends  Component{
    render(){
        const {navigation} = this.props;
        return<View style={styles.container}>
            <Text style={styles.font}>欢迎来到page1</Text>
            <Button title="Go Back" onPress={()=>{
                navigation.goBack()
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