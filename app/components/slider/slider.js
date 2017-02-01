import React, { Component } from 'react';
import Viewport from '../drag_and_drop/viewport';
import { View, ScrollView, ListView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import DrawingBox from '../drawing_box/drawing_box';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

  // TODO: DRY up the following code
  render() {
    let imageFiles = [
      require(`../../images/calling.png`),
      require(`../../images/cry.png`),
      require(`../../images/handstand.png`),
      require(`../../images/question.png`),
      require(`../../images/slide.png`),
      require(`../../images/fight.png`),
      require(`../../images/flower.png`),
      require(`../../images/gymnastics.png`),
      require(`../../images/happy.png`),
      require(`../../images/man.png`),
      require(`../../images/potato.png`),
      require(`../../images/speech-down.png`),
      require(`../../images/speech-left.png`),
      require(`../../images/speech-right.png`),
      require(`../../images/thought-left.png`),
      require(`../../images/thought-right.png`)
    ];
    let imageViews = imageFiles.map((file, idx) => {
      return (
          <Viewport image={<Image source={file} resizeMode={Image.resizeMode.contain} style={styles.image}/>} />
      );
    });

    return (
      <View style={styles.view}>
        <DrawingBox images={imageViews}/>
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
    height: 800,
    width: 400,
    margin: 10,
    backgroundColor: 'blue'
  },
  scrollview: {
    backgroundColor: '#FBF081'
  }
});
