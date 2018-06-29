import React, {Component}from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Animated,
    Easing,
} from 'react-native';
/*组件必须export default修饰*/
import SplashScreen from 'react-native-splash-screen'

export default class SplashComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
        };
    }

    componentDidMount() {
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnim,                      // 动画中的变量值
            {
                toValue: 1,// 透明度最终变为1，即完全不透明
                duration: 3000,
                easing: Easing.bezier(0.15, 0.73, 0.37, 1.2)  //缓动函数

            }
        ).start();
        // 开始执行动画
        setTimeout(() => {
            this.props.navigation.navigate('HomePage');
        }, 3000);
    }


    render() {
        return (
            <View style={styles.container}>
                <Animated.View ref="view" style={[styles.content, {opacity: this.state.fadeAnim,alignItems:'center'}]}>
                    <Image style={{tintColor:'red',marginBottom:20}} source={require('./../../res/images/ic_trending.png')}></Image>
                    <Text style={{alignItems:'center',fontSize:16,color:'#c1c1c1'}}>GitHub Popular</Text>
                </Animated.View>
            </View>
        );
    }

}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'black'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});