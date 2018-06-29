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
export default class Page4 extends  Component{
    static navigationOptions={
        title:'Page4',
        headerBackTitle:'返回'
    }
    render(){
        const {navigation} = this.props;
        const {state,setParams} = navigation;
        const {params} = state;
        return<View style={styles.container}>
            <Text style={styles.font}>欢迎来到page4</Text>
            <Button title="Open darwer" onPress={()=>{
                this.props.navigation.openDrawer()
            }}></Button>
            <Button title="Toggle darwer" onPress={()=>{
                this.props.navigation.closeDrawer()
            }}></Button>
            <Button title="Toggle darwer" onPress={()=>{
                this.props.navigation.toggleDrawer()
            }}></Button>
            <Button title="Open Page5" onPress={()=>{
                navigation.navigate('Page5')
            }}></Button>
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    font:{
        fontSize:20,
        textAlign:'center'
    }
})