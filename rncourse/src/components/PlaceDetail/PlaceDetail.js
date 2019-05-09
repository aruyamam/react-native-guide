import React from 'react';
import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native';

const PlaceDetail = ({ onItemDeleted, onModalClosed, selectedPlace }) => (
   <Modal
      onRequestClose={onModalClosed}
      visible={selectedPlace !== null}
      animationType="slide"
   >
      <View style={styles.modalContainer}>
         <View>
            <Image source={selectedPlace.image} style={styles.placeImage} />
            <Text style={styles.placeName}>{selectedPlace.name}</Text>
         </View>
         <View>
            <Button onPress={onItemDeleted} title="Delete" color="red" />
            <Button onPress={onModalClosed} title="Close" />
         </View>
      </View>
   </Modal>
);

const styles = StyleSheet.create({
   modalContainer: {
      margin: 22
   },
   placeImage: {
      width: '100%',
      height: 200
   },
   placeName: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 28
   }
});

export default PlaceDetail;
