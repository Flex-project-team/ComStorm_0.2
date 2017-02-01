import React, {Component} from 'react';

import Slider from './components/slider/slider.js';
import ViewPort from './components/drag_and_drop/viewport';
import TextBubble from './components/text_bubble';

import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <View style={styles.container}>
        <Image source={require('./components/images/logo.png')} style={{width: 40, height: 40}} />


          <TextBubble />
          <ViewPort />
          <Slider />

          <Text style={styles.welcome}>
            This Is The Root Component!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
});
