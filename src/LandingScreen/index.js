import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
// import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../common';

class LandingScreen extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  _navigate = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Drawer'})],
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    console.log(this.props);

    return (
      <View style={styles.containerStyle}>
        <Text>Landing Screen</Text>
        <Button onPress={this._navigate} text="Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    alignItems: 'flex-end',
    flex: 1,
  },
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default LandingScreen;
