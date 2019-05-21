import React, { Component } from 'react';
import {
   Button,
   Image,
   StyleSheet,
   Text,
   TouchableOpacity,
   View
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace } from '../../store/actions/places';

class PlaceDetail extends Component {
   placeDeletedHandler = () => {
      const { navigator, onDeletePlace, selectedPlace } = this.props;
      onDeletePlace(selectedPlace.key);
      navigator.pop();
   };

   render() {
      const { selectedPlace } = this.props;

      return (
         <View style={styles.container}>
            <View>
               <Image source={selectedPlace.image} style={styles.placeImage} />
               <Text style={styles.placeName}>{selectedPlace.name}</Text>
            </View>
            <View>
               <TouchableOpacity onPress={this.placeDeletedHandler}>
                  <View style={styles.deleteButton}>
                     <Icon size={30} name="ios-trash" color="red" />
                  </View>
               </TouchableOpacity>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
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
   },
   deleteButton: {
      alignItems: 'center'
   }
});

const mapDispatchToProps = dispatch => ({
   onDeletePlace: key => dispatch(deletePlace(key))
});

export default connect(
   null,
   mapDispatchToProps
)(PlaceDetail);
