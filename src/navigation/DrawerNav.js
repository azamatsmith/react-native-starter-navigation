import React from 'react';
import {DrawerNavigator} from 'react-navigation';

import DrawerContent from './DrawerContent';
import DrawerMenu from './DrawerMenu';
import {DrawerIcon} from 'src/common';

import {
  getNavigationOptionsWithAction,
  getDrawerNavigationOptions,
} from '../utils/navigation';

import FirstScreen from '../FirstScreen';
import SecondScreen from '../SecondScreen';

const firstScreenNavOptions = getDrawerNavigationOptions(
  'FirstScreen',
  'white',
  'black',
  DrawerIcon,
);

const secondScreenNavOptions = getDrawerNavigationOptions(
  'SecondScreen',
  'white',
  'black',
  DrawerIcon,
);

const DrawerNav = DrawerNavigator(
  {
    FirstScreen: {
      screen: FirstScreen,
      navigationOptions: firstScreenNavOptions,
    },
    SecondScreen: {
      screen: SecondScreen,
      navigationOptions: secondScreenNavOptions,
    },
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    initialRouteName: 'FirstScreen',
    contentComponent: props => <DrawerContent {...props} />,
  },
);

DrawerNav.navigationOptions = ({navigation}) =>
  getNavigationOptionsWithAction(
    'Settings',
    'white',
    'black',
    <DrawerMenu navigation={navigation} />,
  );

export default DrawerNav;
