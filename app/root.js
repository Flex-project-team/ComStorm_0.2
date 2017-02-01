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
          <Image source={require('./images/logo.png')} style={{margin: 10 }}/>

          <TextBubble />
          <ViewPort />
          <Slider />
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
