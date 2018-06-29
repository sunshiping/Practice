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
export default class Page5 extends  Component{
    static navigationOptions={
        title:'Page5',
        headerBackTitle:'返回'
    }
    render(){
        const {navigation} = this.props;
        return<View style={styles.container}>
            <Text style={styles.font}>欢迎来到page5</Text>
            <Button title="Go Page4" onPress={()=>{
                navigation.navigate('Page4')
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