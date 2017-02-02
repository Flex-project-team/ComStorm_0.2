import React, { Component } from 'react';
import { View, ScrollView, ListView, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class DrawingBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let images = [...this.props.images];

    return (
      <View style={styles.view}>
        {images}
     </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
  },
  image_view: {
    backgroundColor: '#FBF9E9',
    borderRadius: 10,
    margin: 5
  },
  view: {
    height: 100,
    margin: 10
  },
  scrollview: {
    backgroundColor: '#FBF081'
  }
});
