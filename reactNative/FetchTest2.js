import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ListView,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';
import NavigationBar from './NavigationBar'
import Toast,{DURATION} from 'react-native-easy-toast';
import HttpUtils from './HttpUtils'
var data = {
    'result2':[
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
export default class FetchTest extends Component {
    constructor(props){
        super(props);
        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        this.state={
            result2:'',
            dataSource:ds.cloneWithRows(data.result2),
            isLoading:true
        }

        this.onLoad();
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
                    result:JSON.stringify(result),
                    isLoading:false
                })
            })
            .catch(error=>{
                this.setState({
                    result:JSON.stringify(error)
                })
            })

        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },3000)
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
    renderRow(item){
        return<View style={styles.row}>
            <TouchableOpacity onPress={()=>{this.toast.show('你单击了:'+item.fullName,DURATION.LENGTH_SHORT)}}>
                <Text style={styles.tips}>{item.email}</Text>
                <Text style={styles.tips}>{item.fullName}</Text>
            </TouchableOpacity>
        </View>
    }
    renderFooter(){
        return <Image source={require('./res/images/ic_star.png')}/>
    }
  render() {
    return (
      <View style={styles.container}>
          {/*<NavigationBar*/}
              {/*title={'Fetch使用'}*/}
              {/*style={{backgroundColor:'#FF6363'}}*/}
              {/*leftButton={*/}
                  {/*this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))*/}
              {/*}*/}
              {/*rightButton={*/}
                  {/*this.renderButton(require('./res/images/ic_star.png'))*/}
              {/*}*/}
          {/*/>*/}
          {/*<Text onPress={()=>this.onLoad('https://facebook.github.io/react-native/movies.json')}>获取数据</Text>*/}
          {/*<Text>返回结果{this.state.result}</Text>*/}
          <ListView
            dataSource={this.state.result2}
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