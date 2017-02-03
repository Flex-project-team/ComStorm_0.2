import React, { Component } from 'react';
import { View, ScrollView, ListView, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

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
      rendered_objects = this.indices.map((idx, key) => (<View key={key}>{images[idx]}</View>));
      return (
        <View style={styles.view}>
          {rendered_objects}
        </View>
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
    margin: 10,
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
