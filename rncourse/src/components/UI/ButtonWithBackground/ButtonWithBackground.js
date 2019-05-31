import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const buttonWithBackground = ({ children, color, onPress }) => {
   return (
      <TouchableOpacity onPress={onPress}>
         <View style={[styles.button, { backgroundColor: color }]}>
            <Text>{children}</Text>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   button: {
      margin: 5,
      padding: 10,
      borderRadius: 5
   }
});

export default buttonWithBackground;
