import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

type Props = {};
export default class App extends Component<Props> {
   state = {
      places: [],
      selectedPlace: null
   };

   placeAddedHandler = placeName => {
      this.setState(prevState => ({
         places: prevState.places.concat({
            key: '' + Math.random(),
            name: placeName,
            image: {
               uri:
                  'https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg'
            }
         })
      }));
   };

   placeDeleteHandler = () => {
      this.setState(prevState => ({
         places: prevState.places.filter(
            place => place.key !== prevState.selectedPlace.key
         ),
         selectedPlace: null
      }));
   };

   modalClosedHandler = () => {
      this.setState({ selectedPlace: null });
   };

   placeSelectedHandler = key => {
      this.setState(prevState => ({
         selectedPlace: prevState.places.find(place => place.key === key)
      }));
   };

   render() {
      const { places, selectedPlace } = this.state;

      return (
         <View style={styles.container}>
            {selectedPlace && (
               <PlaceDetail
                  selectedPlace={selectedPlace}
                  onItemDeleted={this.placeDeleteHandler}
                  onModalClosed={this.modalClosedHandler}
               />
            )}
            <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            <PlaceList
               onItemSelected={this.placeSelectedHandler}
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
