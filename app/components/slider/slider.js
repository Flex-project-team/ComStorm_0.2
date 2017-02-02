import React, { Component } from 'react';
import Viewport from '../drag_and_drop/viewport';
import { View, ScrollView, ListView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import DrawingBox from '../drawing_box/drawing_box';
import TextBubble from '../text_input/text_bubble';
import SaveButton from '../save_button/save_button.js';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.clickedItems = [];
    this.imageViews = [];
    this.bubbleImageViews = [];
  }

  handleClick(index) {
    let allImages = this.imageViews.concat(this.bubbleImageViews);
    <Viewport key={idx} image={<Image source={file} resizeMode={Image.resizeMode.contain} style={styles.image}/>} />
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
  this.imageViews = imageFiles.map((file, idx) => {
    return (
      <View key={idx} style={styles.image_view} onClick={()=>handleClick(idx)}>
        <Image source={file} resizeMode={Image.resizeMode.contain} style={styles.image}/>
      </View>
    );
  });

  this.bubbleImageViews = bubbleImages.map((file, idx) => {
      return (
        <View key={idx + imageFiles.length} style={styles.image_view} onClick={()=>handleClick(idx+imageFiles.length)}>
          <Image source={file} resizeMode={Image.resizeMode.contain} style={styles.image}/>
        </View>
      );
    });

    let txtBubble = <Viewport key={999} image={<TextBubble />} />;



    this.draggableImages = imageFiles.map((file, idx) => {
      return (
          <Viewport key={idx} image={<Image source={file} resizeMode={Image.resizeMode.contain} style={styles.image}/>} />
      );
    });
    this.draggableImages.unshift(txtBubble);

    return (
      <View style={styles.mainView}>
      <View style={styles.viewer}>
        <ScrollView horizontal={true} style={styles.scrollview}>
        {this.imageViews.concat(this.bubbleImageViews)}
        </ScrollView>
      </View>
      <View collapsable={false} ref="mainView" style={styles.view}>
        <DrawingBox images={this.draggableImages}/>
        </View>
        <SaveButton slider={this} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
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
    height: 300,
    width: 325,
    margin: 10,
    backgroundColor: '#FBFBFA',
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  scrollview: {
    backgroundColor: '#FBF081'
  },
  viewer: {
    height: 100,
    margin: 10
  }
});
