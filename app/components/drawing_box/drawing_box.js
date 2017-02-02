import React, { Component } from 'react';
import { View, ScrollView, ListView, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class DrawingBox extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {indices: []}
  }

  componentWillReceiveProps(newProps) {
   console.log(newProps);
   this.indices = newProps.indices;
  }


  render() {
    console.log(this.indices);
    let images = [...this.props.images];
    let rendered_objects = null;
    if (this.indices) {
      rendered_objects = this.indices.map((idx)=> images[idx])
    }
    return (
      <View style={styles.view}>
        {rendered_objects}
        { //images
        }
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
    margin: 10,
    position: "relative",
    // top: 0,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  scrollview: {
    backgroundColor: '#FBF081'
  }
});
