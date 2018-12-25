/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput} from 'react-native';

type Props = {};
export default class FetchDemoPage extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      showText:''
    }
  }
  loadData(){
    let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
    fetch(url)
      .then(response=>response.text())
      .then(responseText => {
        this.setState({
          showText:responseText
        })
      })
  }
  loadData2(){
    let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
    fetch(url)
      .then(response=>{
        if(response.ok){
          return response.text()
        }
        throw new Error('Network response was not ok')
      })
      .then(responseText => {
        this.setState({
          showText:responseText
        })
      })
      .catch(e=>{
        this.setState({
          showText:e.toString()
        })
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Fetch!</Text>
        <View style={styles.input_container}>
          <TextInput style={styles.input}
                     onChangeText={text => {
                       this.searchKey = text;
                     }}/>
          <Button title="获取数据"
                  onPress={() => {
                    this.loadData();
                  }}/>
        </View>
        <Text>
          {this.state.showText}
        </Text>
      </View>
    );
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
  },
  input:{
    height: 30,
    flex:1,
    borderColor:'black',
    borderWidth: 1,
    marginRight: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
