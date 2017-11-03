import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DrawerIcon} from 'src/common';

class DrawerMenu extends Component {
  render() {
    const {navigation, currentScreenName} = this.props;
    return (
      <TouchableOpacity
        style={styles.containerStyle}
        onPress={() => {
          if (navigation.state.index === 0) {
            // check if drawer is not open, then only open it
            navigation.navigate('DrawerOpen');
            // this.props.fetchDrawerItems(currentScreenName);
          } else {
            // close drawer
            navigation.navigate('DrawerClose');
          }
        }}>
        <DrawerIcon />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
});

export default DrawerMenu;
