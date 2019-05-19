import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
   render() {
      const { places } = this.props;

      return (
         <View>
            <PlaceList places={places} />
         </View>
      );
   }
}

const mapStateToProps = state => ({
   places: state.places.places
});

export default connect(mapStateToProps)(FindPlaceScreen);
