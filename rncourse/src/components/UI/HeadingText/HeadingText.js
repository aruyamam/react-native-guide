import React from 'react';
import { StyleSheet, Text } from 'react-native';

const headingText = ({ children, style, ...rest }) => {
   return (
      <Text {...rest} style={[styles.textHeading, style]}>
         {children}
      </Text>
   );
};

const styles = StyleSheet.create({
   textHeading: {
      fontSize: 28,
      fontWeight: 'bold'
   }
});

export default headingText;
