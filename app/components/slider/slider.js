import React, { Component } from 'react';
import Viewport from '../drag_and_drop/viewport';
import { View, ScrollView, ListView, Image, StyleSheet, TouchableOpacity } from 'react-native';


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
      return (<TouchableOpacity key={idx}>
        <View style={styles.image_view}>
          <Viewport image={<Image source={file} resizeMode={Image.resizeMode.contain} style={styles.image}/>} />
        </View>
      </TouchableOpacity>);
    });

    return (
      <View style={styles.view}>
        <ScrollView horizontal={true} style={styles.scrollview}>
          {imageViews}
        </ScrollView>
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
