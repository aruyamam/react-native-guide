import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = ({ onItemDeleted, places }) => (
   <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={({ item }) => (
         <ListItem
            placeName={item.name}
            placeImage={item.image}
            onItemPressed={() => onItemDeleted(item.key)}
         />
      )}
   />
);

const styles = StyleSheet.create({
   listContainer: {
      width: '100%'
   }
});

export default PlaceList;
