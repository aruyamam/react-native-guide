import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

class PlaceInput extends Component {
   state = {
      placeName: ''
   };

   placeNameChangeHandler = val => {
      this.setState({ placeName: val });
   };

   placeSubmitHandler = () => {
      const { onPlaceAdded } = this.props;
      const { placeName } = this.state;

      if (placeName.trim() === '') {
         return;
      }

      this.setState({ placeName: '' });
      onPlaceAdded(placeName);
   };

   render() {
      const { placeName } = this.state;

      return (
         <View style={styles.inputContainer}>
            <TextInput
               style={styles.placeInput}
               placeholder="An awesome place"
               value={placeName}
               onChangeText={this.placeNameChangeHandler}
            />
            <Button
               title="Add"
               style={styles.placeButton}
               onPress={this.placeSubmitHandler}
            />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   inputContainer: {
      // flex: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   placeInput: {
      width: '70%'
   },
   placeButton: {
      width: '30%'
   }
});

export default PlaceInput;
