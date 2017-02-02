import React, {Component} from 'react';

import Slider from '../components/slider/slider.js';
import ViewPort from '../components/drag_and_drop/viewport';

import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default class ComicScene extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <View>
          <View style={styles.nav}>
            <Image source={require('../images/logo.png')} style={{margin: 10 }}/>
          </View>
          <View style={styles.container}>
            <Slider />
            <ViewPort />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
 container: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#FBF9E9',
 },
 nav: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#FBF9E9',
 }
});
