import React from 'react';
import {
   Button, Image, StyleSheet, View,
} from 'react-native';
import imagePlaceholder from '../../assets/beautiful-place.jpg';

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
   previewImage: {
      width: '100%',
      height: '100%',
   },
});

const PickImage = () => (
   <View style={styles.container}>
      <View style={styles.placeholder}>
         <Image source={imagePlaceholder} style={styles.previewImage} />
      </View>
      <View style={styles.button}>
         <Button title="Pick Image" />
      </View>
   </View>
);

export default PickImage;
