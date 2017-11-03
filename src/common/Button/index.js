import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class Button extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    const {text, ...rest} = this.props;
    return (
      <TouchableOpacity style={styles.buttonStyle} {...rest}>
        <Text style={styles.buttonTextStyle}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 3,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
