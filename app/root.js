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

          <Slider />
          <TextBubble />
          <ViewPort />
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
 }
});
