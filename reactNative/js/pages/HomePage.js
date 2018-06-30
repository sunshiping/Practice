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
    static navigationOptions={
        title:'Home',
        // header:(
        //     <View style={{width:Dimensions.get('window').width,height:64,backgroundColor:'#1B82D1'}}/>
        // ),
        headerTitle:(
            <View style={{width:160,height:20,alignItems:'center'}}>
                <Text>自定义headerTitle</Text>
            </View>
        ),
        headerBackTitle:'返回',
        headerTruncatedBackTitle:'回退',
        headerRight:(
            <View>
                <Text>right</Text>
            </View>
        ),
        headerLeft:(
            <View>
                <Text>left</Text>
            </View>
        ),
        headerStyle: {
            backgroundColor:'#FF6363'
        },
        headerTitleStyle:{
            color:'#333'
        },
        headerBackTitleStyle:{
            tintColor:'#E8E8E8'
        },
        headerTintColor:'#F33',
        gesturesEnabled:false,
    }
    render(){
        const {navigation} =this.props;
        return<View style={styles.container}>
            <Text style={styles.font}>欢迎来到HomePage</Text>
            <Button title="Go To Page1" onPress={()=>{
                navigation.navigate('Page1')
            }}></Button>
            <Button title="Go To Page2" onPress={()=>{
                navigation.navigate('Page2',{name:'动态的Page2'})
            }}></Button>
            <Button title="Go To Page3" onPress={()=>{
                navigation.navigate('Page3',{title:'Page345'})
            }}></Button>
            <Button title="This is TabNavigator" onPress={()=>{
                navigation.navigate('TabNav')
            }}></Button>

            <Button title="This is DrawerNav" onPress={()=>{
                navigation.navigate('DrawerNav',{title:'DrawerNav'})
            }}></Button>        </View>
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