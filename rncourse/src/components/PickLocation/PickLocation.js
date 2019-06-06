import React from 'react';
import {
   Button, StyleSheet, Text, View,
} from 'react-native';

const styles = StyleSheet.create({
   container: {
      width: '100%',
      alignItems: 'center',
   },
   placeholder: {
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#eee',
      width: '80%',
      height: 150,
   },
   button: {
      margin: 8,
   },
});

const PickLocation = () => (
   <View style={styles.container}>
      <View style={styles.placeholder}>
         <Text>Map</Text>
      </View>
      <View style={styles.button}>
         <Button title="Locate Me" />
      </View>
   </View>
);

export default PickLocation;
