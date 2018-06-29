/**
 * Created by sunshiping on 2018/6/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet
} from 'react-native'
export default class Page3 extends  Component{
    render(){
        const {navigation} = this.props;
        const {state,setParams} = navigation;
        const {params} = state;
        // const showText = params.mode ==='edit'?'正在编辑':'编辑完成';
        return<View style={styles.container}>
            <Text style={styles.font}>欢迎来到page3</Text>
            {/*<Text style={styles.font}>{showText}</Text>*/}
            <TextInput style={styles.input} onChangeText={text=>{
                setParams({title:text})
            }}/>
            <Button title="Go Back" onPress={()=>{
                navigation.goBack()
            }}></Button>
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    font:{
        fontSize:20,
        textAlign:'center'
    },
    input:{
        width:300,
        height:50,
        borderWidth:1,
        marginBottom:20,
        borderColor:'black'
    }
})