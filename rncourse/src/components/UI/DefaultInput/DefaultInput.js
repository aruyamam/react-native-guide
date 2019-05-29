import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const defaultInput = props => (
   <TextInput {...props} style={[styles.input, props.style]} />
);

const styles = StyleSheet.create({
   input: {
      width: '100%',
      margin: 8,
      padding: 5,
      borderWidth: 1,
      borderColor: '#eee'
   }
});

export default defaultInput;
