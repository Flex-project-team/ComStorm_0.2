import React, { Component } from 'react';
import { View, ScrollView, ListView, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
        <ScrollView horizontal={true} style={styles.scrollview}>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/calling.png')} resizeMode={Image.resizeMode.contain} style={styles.image}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/cry.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/handstand.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/question.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/slide.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/drink.png')} resizeMode={Image.resizeMode.contain} style={styles.image}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/fight.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/flower.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/gymnastics.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/happy.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/man.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/potato.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/speech-down.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/speech-left.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/speech-right.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/thought-left.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <Image source={require('../../images/thought-right.png')} resizeMode={Image.resizeMode.contain} style={styles.image} />
            </View>
          </TouchableOpacity>
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
    backgroundColor: 'aliceblue',
    borderRadius: 10,
    margin: 5
  },
  view: {
    height: 100,
    margin: 10
  },
  scrollview: {
    backgroundColor: 'blue'
  }
});
