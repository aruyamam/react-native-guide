import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
   input: {
      width: '100%',
      margin: 8,
      padding: 5,
      borderWidth: 1,
      borderColor: '#eee',
   },
});

const defaultInput = ({ style, ...rest }) => <TextInput {...rest} style={[styles.input, style]} />;

defaultInput.defaultProps = {
   style: null,
};

defaultInput.propTypes = {
   style: PropTypes.object,
};

export default defaultInput;
