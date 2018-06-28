import {AppStackNavigator} from './navigators/AppNavigators'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default AppStackNavigator;