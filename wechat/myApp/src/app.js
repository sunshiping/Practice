import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
// import configStore from "./redux/store";
// const store = configStore();

import Position from "./pages/index/index";

// import "./app.less";

class App extends Component {
  config = {
    pages: [
      "pages/index/index",
      "pages/list/index",
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#0068C4",
      navigationBarTitleText: "求职",
      navigationBarTextStyle: "white",
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/index/index",
          text: "职位",
          iconPath: "./asset/images/tabbar/icon-position.png",
          selectedIconPath: "./asset/images/tabbar/icon-position-active.png"
        },
        {
          pagePath: "pages/list/index",
          text: "公司",
          iconPath: "./asset/images/tabbar/icon-enterprise.png",
          selectedIconPath: "./asset/images/tabbar/icon-enterprise-active.png"
        }
      ]
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return (
      <Provider store={store}>
        <Position />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
