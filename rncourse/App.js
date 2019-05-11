import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {
   addPlace,
   deletePlace,
   deselectPlace,
   selectPlace
} from './src/store/actions';

type Props = {};
class App extends Component<Props> {
   placeAddedHandler = placeName => {
      this.props.onAddPlace(placeName);
   };

   placeDeleteHandler = () => {
      this.props.onDeletePlace();
   };

   modalClosedHandler = () => {
      this.props.onDeselectPlace();
   };

   placeSelectedHandler = key => {
      this.props.onSelectPlace(key);
   };

   render() {
      const { places, selectedPlace } = this.props;

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

const mapStateToProps = state => ({
   places: state.places.places,
   selectedPlace: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
   onAddPlace: name => dispatch(addPlace(name)),
   onDeletePlace: () => dispatch(deletePlace()),
   onSelectPlace: key => dispatch(selectPlace(key)),
   onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App);
