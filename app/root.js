import React, {Component} from 'react';

import Slider from './components/slider/slider.js';
import ViewPort from './components/drag_and_drop/viewport';
import TextBubble from './components/text_bubble';

import {
  View,
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

          <TextBubble />
          <Slider />
          <Text>
            {"\n"}
            {"\n"}
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
