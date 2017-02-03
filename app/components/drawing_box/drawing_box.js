import React, { Component } from 'react';
import { View, ScrollView, ListView, Image, StyleSheet,
  TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
const dismissKeyboard = require('dismissKeyboard');

export default class DrawingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {indices: []};
  }

  componentWillReceiveProps(newProps) {
   this.indices = newProps.indices;
  }

  render() {
    console.log(this.indices);
    let images = [...this.props.images];
    let rendered_objects = null;
    //If there are images to render in the box
    if (this.indices && this.indices.length > 0) {
      rendered_objects = this.indices.map((idx, key) => (<View key={key} style={styles.image}>{images[idx]}</View>))
      return (
        <TouchableWithoutFeedback style={styles.dismiss} onPress={()=> dismissKeyboard()}>
          <View style={styles.view}>
            {rendered_objects}
          </View>
        </TouchableWithoutFeedback>
      );
    }
    //This is the view when the box is empty
    else {
      return (
        <View style={styles.textView}>
          <Text style={styles.placeholderText}>Tap items on the slider to place them in this box and drag word clouds by the tail</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 100,
    left: 100
  },
  image_view: {
    backgroundColor: '#FBF9E9',
    borderRadius: 10,
    margin: 5
  },
  view: {
    height: 298,
    position: "relative",
    // top: 0,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  textView: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholderText: {
    fontFamily: 'coming_soon',
    color: '#B2B29C',
    textAlign: 'center',
    padding: 10
  }
});
