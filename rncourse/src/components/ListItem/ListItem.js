import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ListItem = ({ onItemPressed, placeImage, placeName }) => {
   return (
      <TouchableOpacity onPress={onItemPressed}>
         <View style={styles.listItem}>
            <Image
               resizeMode={'cover'}
               source={placeImage}
               style={styles.placeImage}
            />
            <Text>{placeName}</Text>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginBottom: 5,
      padding: 10,
      backgroundColor: '#eee'
   },
   placeImage: {
      height: 30,
      width: 30,
      marginRight: 8
   }
});

export default ListItem;
