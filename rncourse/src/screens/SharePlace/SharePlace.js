import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
   Button, ScrollView, StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },
   placeholder: {
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#eee',
      width: '80%',
      height: 150,
   },
   button: {
      margin: 8,
   },
   previewImage: {
      width: '100%',
      height: '100%',
   },
});

class SharePlaceScreen extends Component {
   state = {
      placeName: '',
   };

   constructor(props) {
      super(props);
      props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
   }

   onNavigatorEvent = (event) => {
      const { navigator } = this.props;
      if (event.type === 'NavBarButtonPress' && event.id === 'sideDrawerToggle') {
         navigator.toggleDrawer({
            side: 'left',
         });
      }
   };

   placeNameChangeHandler = (val) => {
      this.setState({
         placeName: val,
      });
   };

   placeAddedHandler = () => {
      const { onAddPlace } = this.props;
      const { placeName } = this.state;

      if (placeName.trim() !== '') {
         onAddPlace(placeName);
      }
   };

   render() {
      const { placeName } = this.state;

      return (
         <ScrollView>
            <View style={styles.container}>
               <MainText>
                  <HeadingText>Share a Place with us!</HeadingText>
               </MainText>
               <PickImage />
               <PickLocation />
               <PlaceInput onChangeText={this.placeNameChangeHandler} placeName={placeName} />
               <View>
                  <Button title="Share the Place!" onPress={this.placeAddedHandler} />
               </View>
            </View>
         </ScrollView>
      );
   }
}

SharePlaceScreen.propTypes = {
   onAddPlace: PropTypes.func.isRequired,
   navigator: PropTypes.shape({
      setOnNavigatorEvent: PropTypes.func.isRequired,
   }).isRequired,
};

const mapDispatchToProps = dispatch => ({
   onAddPlace: placeName => dispatch(addPlace(placeName)),
});

export default connect(
   null,
   mapDispatchToProps,
)(SharePlaceScreen);
