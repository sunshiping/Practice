/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,AsyncStorage} from 'react-native';

type Props = {};
const KEY = 'save_key';
export default class AsyncStorageDemoPage extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      value:'',
      showText:''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome AsyncStorageDemoPage!</Text>
        <TextInput style={styles.input}
                   value={this.state.value}
                   onChangeText={(text) => this.changeMoney(text)}/>
        <View style={styles.input_container}>
          <Text onPress={()=>{
            this.doSave()
          }}>
            存储
          </Text>
          <Text onPress={()=>{
            this.doRemove()
          }}>
            删除
          </Text>
          <Text onPress={()=>{
            this.getData()
          }}>
            获取
          </Text>
        </View>
        <Text>
          {this.state.showText}
        </Text>
      </View>
    );
  }
  async changeMoney(text) {
    this.setState({
      value: text
    });
  }
  async doSave(){
    console.log(this.state.value);
    if(this.state.value){
      AsyncStorage.setItem(KEY,this.state.value,error=>{
        error && console.log(error.toString())
      })
    }
  }
  async doRemove(){
    AsyncStorage.removeItem(KEY,error=>{
      error && console.log(error.toString())
    })
  }
  async getData(){
    AsyncStorage.getItem(KEY,(error,value)=>{
      this.setState({
        value:value,
        showText: value
      });
      console.log(value);
      error && console.log(error.toString());
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  input_container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input:{
    height: 30,
    borderColor:'black',
    borderWidth: 1,
    marginBottom: 16,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
