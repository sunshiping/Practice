/**
 * Created by sunshiping on 2018/6/28.
 */
import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './../js/pages/HomePage'
import Page1 from './../js/pages/Page1'
import Page2 from './../js/pages/Page2'
export const AppStackNavigator = StackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1
    },
    Page2: {
        screen: Page2
    }
})
