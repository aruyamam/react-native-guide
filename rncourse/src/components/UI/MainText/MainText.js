import React from 'react';
import { StyleSheet, Text } from 'react-native';

const mainText = ({ children }) => {
   return <Text style={styles.mainText}>{children}</Text>;
};

const styles = StyleSheet.create({
   mainText: {
      color: '#bbb'
   }
});

export default mainText;
