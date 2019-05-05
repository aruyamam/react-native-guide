import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ListItem = ({ onItemPressed, placeName }) => {
   return (
      <TouchableOpacity onPress={onItemPressed}>
         <View style={styles.listItem}>
            <Text>{placeName}</Text>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   listItem: {
      width: '100%',
      marginBottom: 5,
      padding: 10,
      backgroundColor: '#eee'
   }
});

export default ListItem;
