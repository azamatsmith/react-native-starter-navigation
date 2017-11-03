import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationActions} from 'react-navigation';

class FirstScreen extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    return (
      <View>
        <Text>First Screen Text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default FirstScreen;
