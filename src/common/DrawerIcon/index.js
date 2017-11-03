import React from 'react';
import {Image, StyleSheet} from 'react-native';

const DrawerNavigation = () =>
  <Image source={require('./Drawer.png')} style={{width: 20, height: 20}} />;

const styles = StyleSheet.create({
  imageStyle: {
    height: 20,
    width: 20,
  },
});

export default DrawerNavigation;
