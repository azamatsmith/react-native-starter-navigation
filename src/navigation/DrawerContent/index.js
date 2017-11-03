import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class DrawerContent extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  _navigate = screen => {
    const {navigation} = this.props;
    navigation.navigate('DrawerClose');
    navigation.navigate(screen);
  };

  _logout = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'LandingScreen'})],
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => this._navigate('FirstScreen')}>
          <Text>First Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._navigate('SecondScreen')}>
          <Text>Second Screen</Text>
        </TouchableOpacity>
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={this._logout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60,
  },
});

export default DrawerContent;
