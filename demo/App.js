import React,{Component}from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class HelloWorldApp extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.red}>Hello world</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#6435c9',
    flex:1,
    margin:30,
    borderWidth:1,
    borderColor:'#6435c9',
    borderRadius:16,
    shadowColor:'#6435c9',
    shadowOpacity:0.6,
    shadowRadius:2,
    shadowOffset:{
      height:1,
      width:0
    }
  },
  red:{
    fontSize:20,
    textAlign:'center',
    fontStyle:'italic',
    letterSpacing:2,
    lineHeight:33,
    fontWeight:'900',
    textDecorationLine:'underline',
    textDecorationStyle:'dashed',
    color:'red'
  }
})
