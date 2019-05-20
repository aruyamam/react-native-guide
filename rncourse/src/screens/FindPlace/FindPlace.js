import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
   itemSelectHandler = key => {
      const { navigator, places } = this.props;
      const selectedPlace = places.find(place => place.key === key);
      navigator.push({
         screen: 'awesome-places.PlaceDetailScreen',
         title: selectedPlace.name,
         passProps: {
            selectedPlace
         }
      });
   };

   render() {
      const { places } = this.props;

      return (
         <View>
            <PlaceList
               places={places}
               onItemSelected={this.itemSelectHandler}
            />
         </View>
      );
   }
}

const mapStateToProps = state => ({
   places: state.places.places
});

export default connect(mapStateToProps)(FindPlaceScreen);
