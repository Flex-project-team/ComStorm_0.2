import React, { Component } from 'react';
import { ScrollView, ListView, Image } from 'react-native';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView horizontal={true} style={ {height: 50, flex: 1} }>
        <Image source={require('../../images/calling.png')} style={{width: 40, height: 40}} />
        <Image source={require('../../images/cry.png')} style={{width: 40, height: 40}} />
      </ScrollView>
    );
  }
}
