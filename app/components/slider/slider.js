import React, { Component } from 'react';
import Viewport from '../drag_and_drop/viewport';
import { View, ScrollView, ListView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import DrawingBox from '../drawing_box/drawing_box';
import TextBubble from '../text_input/text_bubble';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

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
      require(`../../images/potato.png`)
    ];

    let bubbleImages = [
      require(`../../images/speech-down.png`),
      require(`../../images/speech-left.png`),
      require(`../../images/speech-right.png`),
      require(`../../images/thought-left.png`),
      require(`../../images/thought-right.png`)
    ];

  let bubbleImageViews = bubbleImages.map((file, idx) => {
      return (
        <View key={idx + imageFiles.length} style={styles.image_view}>
          <Image source={file} resizeMode={Image.resizeMode.contain} style={styles.image}/>
        </View>
      );
    });

    let txtBubble = <Viewport key={999} image={<TextBubble />} />;

    let imageViews = imageFiles.map((file, idx) => {
      return (
        <View key={idx} style={styles.image_view}>
          <Image source={file} resizeMode={Image.resizeMode.contain} style={styles.image}/>
        </View>
      );
    });


    let draggableImages = imageFiles.map((file, idx) => {
      return (
          <Viewport key={idx} image={<Image source={file} resizeMode={Image.resizeMode.contain} style={styles.image}/>} />
      );
    });
    draggableImages.unshift(txtBubble);

    return (
      <View>
      <View style={styles.viewer}>
        <ScrollView horizontal={true} style={styles.scrollview}>
          {imageViews}
        </ScrollView>
        <ScrollView>
          {imageViews.concat(bubbleImageViews)}
        </ScrollView>
      </View>
      <View style={styles.view}>
        <DrawingBox images={draggableImages}/>
        </View>
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
    height: 325,
    width: 392,
    margin: 10,
    backgroundColor: 'blue'
  },
  scrollview: {
    backgroundColor: '#FBF081'
  },
  viewer: {
    height: 100,
    margin: 10
  }
});
