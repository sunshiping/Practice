/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import WelcomePage from './js/pages/WelcomePage';
import AppNavigator from './js/navigator/AppNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
