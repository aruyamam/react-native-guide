import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/beautiful-place.jpg';

type Props = {};
export default class App extends Component<Props> {
   state = {
      places: []
   };

   placeAddedHandler = placeName => {
      this.setState(prevState => ({
         places: prevState.places.concat({
            key: '' + Math.random(),
            name: placeName,
            image: placeImage
         })
      }));
   };

   placeDeletedHandler = key => {
      this.setState(prevState => ({
         places: prevState.places.filter(place => place.key !== key)
      }));
   };

   render() {
      const { places } = this.state;

      return (
         <View style={styles.container}>
            <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            <PlaceList
               onItemDeleted={this.placeDeletedHandler}
               places={places}
            />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#F5FCFF'
   }
});
