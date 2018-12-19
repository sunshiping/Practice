export default class NavigationUtil {
  // 返回上一级
  static goPage(params, page) {
    const navigation = NavigationUtil.navigation;
    if (!navigation) {
      console.log("NavigationUtil.navigation can not be null");
      return;
    }
    navigation.navigate(
      page,
      {
        ...params
      }
    )
  }

  // 返回上一级
  static goBack(navigation) {
    navigation.goBack()
  }

  // 返回首页
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate("Main")
  }
}
