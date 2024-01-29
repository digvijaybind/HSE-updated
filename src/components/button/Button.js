/*eslint-disable*/
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({onPress, title, backgroundColor, color, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor}, style]}>
      <Text style={[styles.buttonText, {color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 360,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // Remove Cursor property, as it's not applicable in React Native
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'lato-semibold',
  },
});

export default Button;
