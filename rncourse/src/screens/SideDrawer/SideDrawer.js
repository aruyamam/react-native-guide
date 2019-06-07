import React, { Component } from 'react';
import {
   Dimensions, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
   container: {
      paddingTop: 50,
      backgroundColor: 'white',
      flex: 1,
   },
   drawerItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#eee',
   },
   drawerItemIcon: {
      marginRight: 10,
      padding: 10,
   },
});

class SideDrawer extends Component {
   render() {
      return (
         <View style={[styles.container, { width: Dimensions.get('window').width * 0.8 }]}>
            <TouchableOpacity>
               <View style={styles.drawerItem}>
                  <Icon name="ios-log-out" size={30} color="#aaa" style={styles.drawerItemIcon} />
                  <Text>Sign Out</Text>
               </View>
            </TouchableOpacity>
         </View>
      );
   }
}

export default SideDrawer;
