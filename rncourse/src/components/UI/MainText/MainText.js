import React from 'react';
import { StyleSheet, Text } from 'react-native';

const mainText = ({ children }) => {
   return <Text style={styles.mainText}>{children}</Text>;
};

const styles = StyleSheet.create({
   mainText: {
      color: 'black',
      backgroundColor: 'transparent'
   }
});

export default mainText;
