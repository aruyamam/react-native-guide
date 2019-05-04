import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = ({ places }) => (
   <View style={styles.listContainer}>
      {places.map((place, i) => (
         <ListItem key={i} placeName={place} />
      ))}
   </View>
);

const styles = StyleSheet.create({
   listContainer: {
      width: '100%'
   }
});

export default PlaceList;