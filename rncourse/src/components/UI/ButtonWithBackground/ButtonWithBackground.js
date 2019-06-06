/* react/no-unused-prop-types: "off"  */

import React from 'react';
import PropTypes from 'prop-types';
import {
   StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

const styles = StyleSheet.create({
   button: {
      margin: 5,
      padding: 10,
      borderRadius: 5,
   },
});

const buttonWithBackground = ({ children, color, onPress }) => (
   <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: color }]}>
         <Text>{children}</Text>
      </View>
   </TouchableOpacity>
);

buttonWithBackground.propTypes = {
   children: PropTypes.node.isRequired,
   color: PropTypes.string.isRequired,
   onPress: PropTypes.func.isRequired,
};

export default buttonWithBackground;
