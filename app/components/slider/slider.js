import React, { Component } from 'react';
import Viewport from '../drag_and_drop/viewport';
import { View, ScrollView, ListView, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DrawingBox from '../drawing_box/drawing_box';
import TextBubble from '../text_input/text_bubble';

import SaveButton from '../save_button/save_button.js';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {clickedItems: []}
    this.clickedItems = [];
  }

  handleClick(index) {
    this.clickedItems.push(index);
    this.setState({clickedItems: this.clickedItems});
  }

  navigateHome() {
    this.props.navigator.push({ name: "MainScene"});
  }

  clearPage() {
    this.clickedItems = [];
    this.setState({clickedItems: []});
  }

  undoItem() {
    this.clickedItems.pop();
    this.setState({clickedItems: this.clickedItems});
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
      require(`../../images/thought-right.png`),
      require('../../images/caption.png'),
    ];

    let imageViews = imageFiles.map((file, idx) => {
    return (
      <TouchableOpacity key={idx} onPress={()=>this.handleClick(idx)}>
        <View style={styles.image_view}>
          <Image source={file} resizeMode={Image.resizeMode.contain} style={styles.image}/>
        </View>
      </TouchableOpacity>
    );
  });

    let bubbleImageViews = bubbleImages.map((file, idx) => {
      return (

        <TouchableOpacity key={idx + imageFiles.length} onPress={()=>this.handleClick(idx+imageFiles.length)}>
          <View style={styles.image_view}>
            <Image source={file} resizeMode={Image.resizeMode.contain} style={styles.image}/>
          </View>
        </TouchableOpacity>
      );
    });

  let draggableTextBubbles = bubbleImageViews.map((file, idx) => {
    return (
        <Viewport key={idx} image={<TextBubble img={bubbleImages[idx]} />} />
    );
  });



    let draggableImages = imageFiles.map((file, idx) => {
      return (
          <Viewport key={idx} image={<Image source={file} resizeMode={Image.resizeMode.contain} style={styles.imagedrag}/>} />
      );
    });

    return (
      <View style={styles.mainView}>

        <View collapsable={false} ref="mainView" style={styles.view}>
          <DrawingBox images={draggableImages.concat(draggableTextBubbles)} indices={this.clickedItems}/>
        </View>

        <SaveButton slider={this} navigator={this.props.navigator}/>

        <View style={styles.touchText}>
          <TouchableOpacity style={styles.backToHome} onPress={this.navigateHome.bind(this)}>
            <Text style={styles.backToHomeText}>
              Back To Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backToHome}>
            <Text style={styles.backToHomeText} onPress={this.clearPage.bind(this)}>
              Clear Comic
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backToHome}>
            <Text style={styles.backToHomeText} onPress={this.undoItem.bind(this)}>
              Undo Last Item
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewer}>
          <ScrollView horizontal={true} style={styles.scrollview} >
            {imageViews.concat(bubbleImageViews)}
          </ScrollView>
        </View>

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
    height: 90
  },
  imagedrag: {
    width: 90,
    height: 90,
    position: 'absolute',
    top: 10,
    left: 10
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
    margin: 5
  },
  touchText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1,
    marginBottom: 1
  },
  backToHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1,
    marginBottom: 1
  },
  backToHomeText: {
    textDecorationLine: 'underline',
    fontFamily: 'coming_soon',
    marginRight: 20,
    marginLeft: 20
  },
  drawbox: {
    position: 'relative'
  }
});
