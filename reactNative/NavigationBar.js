/**
 * Created by sunshiping on 2018/6/26.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    Platform,
    StyleSheet,
}from 'react-native';
import PropTypes from 'prop-types';
const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const StatusBarShape={
    backgroundColor:PropTypes.string,
    barStyle:PropTypes.oneOf(['default','light-content','dark-content']),
    hidden:PropTypes.bool
}
export default class NavigationBar extends Component {
    static defaultProps={
        statusBar:{
            barStyle:'light-content',
            hidden:false
        }
    }
    static propTypes={
        style:View.propTypes.style,
        title:PropTypes.string,
        titleView:PropTypes.element,
        hide:PropTypes.bool,
        leftButton:PropTypes.element,
        rightButton:PropTypes.element,
        statusBar:PropTypes.shape(StatusBarShape)
    }
    constructor(props){
        super(props);
        this.state={
            title:'',
            hide:false
        }
    }
    render(){
        let statusBar = !this.props.statusBar.hidden ?
            <View style={styles.statusBar}>
                <StatusBar {...this.props.statusBar} barStyle="light-content" style={styles.statusBar}/>
            </View>: null;
        let titleView = this.props.titleView?this.props.titleView:<Text style={styles.title}>{this.props.title}</Text>
        let content = <View style={styles.navBar}>
            {this.props.leftButton}
            <View style={styles.titleViewContent}>
                {titleView}
            </View>
            {this.props.rightButton}
        </View>
        return(
            <View style={[styles.container,this.props.style]}>
                {statusBar}
                {content}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray'
    },
    navBar:{
        justifyContent:'space-between',
        alignItems:'center',
        height: Platform.OS === 'ios'?NAV_BAR_HEIGHT_IOS:NAV_BAR_HEIGHT_ANDROID,
        flexDirection:'row',
    },
    titleViewContent:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:40,
        right:40,
        top:0,
        bottom:0
    },
    title:{
        fontSize:20,
        color:'white'
    },
    statusBar:{
        height: Platform.OS === 'ios'?STATUS_BAR_HEIGHT:0,
    }
})
