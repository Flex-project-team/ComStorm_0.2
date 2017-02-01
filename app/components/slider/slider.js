import React, { Component } from 'react';
import { ScrollView, ListView, Image, View } from 'react-native';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image source={require('../../images/calling.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/cry.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/handstand.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/question.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/drink.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/fight.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/flower.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/happy.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/man.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/potato.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/walking.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/gymnastics.png')} style={{width: 40, height: 90, marginRight: 20}} />
      </View>
    );
  }
}
