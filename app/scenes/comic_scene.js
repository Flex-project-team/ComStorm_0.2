import React, {Component} from 'react';

import Slider from '../components/slider/slider.js';
import ViewPort from '../components/drag_and_drop/viewport';
import TextBubble from '../components/text_input/text_bubble';

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
          <Text style={{fontFamily: 'sf_cartoonist_hand_bold_italic'}}>
            testing
          </Text>
          <View style={styles.container}>
            <Slider />
            <TextBubble />
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
