import React, { Component, Fetch } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import NavigationBar from './NavigationBar'
import HttpUtils from './HttpUtils'
export default class FetchTest extends Component {
    constructor(props){
        super(props);
        this.state={
            result:''
        }
    }
    renderButton(image) {
        return <TouchableOpacity onPress={()=>{
            this.props.navigator.pop();
        }}>
            <Image style={{width: 22, height: 22,margin:5}} source={image}/>
        </TouchableOpacity>
    }
    onLoad(url){
        HttpUtils.get(url)
            .then(result=>{
                this.setState({
                    result:JSON.stringify(result)
                })
            })
            .catch(error=>{
                this.setState({
                    result:JSON.stringify(error)
                })
            })
        // let opts = {
        //     method:'GET'
        // };
        // fetch(url,opts)
        //     .then((response)=>response.json())
        //     .then((response) => {//1
        //     this.setState({
        //         result: JSON.stringify(response)
        //     })
        // }).catch((err) => {//2
        //     this.setState({
        //         result: JSON.stringify(error)
        //     })
        // });
    }

    onSubmit(url,data){
        let opts = {
            method: "POST",
            header:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
        }
        fetch(url,opts)
            .then((response)=>response.json())
            .then((response) => {//1
                this.setState({
                    result: JSON.stringify(response)
                })
            }).catch((err) => {//2
            this.setState({
                result: JSON.stringify(error)
            })
        });
    }
  render() {
    return (
      <View style={styles.container}>
          <NavigationBar
              title={'Fetch使用'}
              style={{backgroundColor:'#FF6363'}}
              leftButton={
                  this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))
              }
              rightButton={
                  this.renderButton(require('./res/images/ic_star.png'))
              }
          />
          <Text onPress={()=>this.onLoad('https://facebook.github.io/react-native/movies.json')}>获取数据</Text>
          <Text>返回结果{this.state.result}</Text>
          {/*<ListView*/}
            {/*dataSource={this.state.dataSource}*/}
            {/*renderRow={(item)=>this.renderRow(item)}*/}
            {/*renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=>this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}*/}
            {/*renderFooter={()=>this.renderFooter()}*/}
            {/*refreshControl={<RefreshControl refreshing={this.state.isLoading} onRefresh={()=>this.onLoad()}/>}*/}
        {/*/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5fcff',
    },
    tips:{
        fontSize:18
    },
    row:{
        height:60,
        padding:10
    },
    line:{
        height:1,
        backgroundColor:'black'
    },



    page1:{
        flex:1,
        backgroundColor:'red',
    },
    page2:{
        flex:1,
        backgroundColor:'green',
    },
    image:{
        width:22,
        height:22,
    }
});