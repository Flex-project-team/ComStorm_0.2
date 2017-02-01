import React, { Component } from 'react';
import { ScrollView, ListView, Image } from 'react-native';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView horizontal={true} >
        <Image source={require('../../images/calling.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/cry.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/handstand.png')} style={{width: 40, height: 90, marginRight: 20}} />
        <Image source={require('../../images/question.png')} style={{width: 40, height: 90, marginRight: 20}} />
      </ScrollView>
    );
  }
}
