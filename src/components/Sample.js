import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Sample = () => {
  return <Text style={styles.buttonText}>Sample</Text>;
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 360,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    Cursor: 'pointer',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'lato-semibold',
  },
});
export default Sample;
