import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ListView,
    TouchableOpacity,
    RefreshControl,
} from 'react-native';
import Toast,{DURATION} from 'react-native-easy-toast';
var data = {
    'result':[
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        },
        {
            'email':'sunshiping1117@163.com',
            'fullName':'孙世平'
        }
    ],
    'statusCode':0
}
export default class ListVewTest extends Component {
    constructor(props){
        super(props);
        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        this.state={
            dataSource:ds.cloneWithRows(data.result),
            isLoading:true
        }
        this.onLoad();
    }
    renderRow(item){
        return<View style={styles.row}>
            <TouchableOpacity onPress={()=>{this.toast.show('你单击了:'+item.fullName,DURATION.LENGTH_SHORT)}}>
                <Text style={styles.tips}>{item.fullName}</Text>
                <Text style={styles.tips}>{item.email}</Text>
            </TouchableOpacity>
        </View>
    }
    renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return<View key={rowID} style={styles.line}></View>
    }
    renderFooter(){
        return <Image source={require('./res/images/ic_star.png')}/>
    }

    onLoad(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },3000)
    }
  render() {
    return (
      <View style={styles.container}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(item)=>this.renderRow(item)}
            renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=>this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
            renderFooter={()=>this.renderFooter()}
            refreshControl={<RefreshControl refreshing={this.state.isLoading} onRefresh={()=>this.onLoad()}/>}
        />
          <Toast
              ref={toast=>{this.toast=toast}}
              style={{backgroundColor:'red'}}
              position='center'
              positionValue={200}
              fadeInDuration={750}
              fadeOutDuration={1000}
              opacity={0.8}
              textStyle={{color:'white'}}
          />
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
        height:50
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