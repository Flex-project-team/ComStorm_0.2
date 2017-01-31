import React, { Component } from 'react';
import { ScrollView, ListView, Image } from 'react-native';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <Image source={require('../../images/calling.png')} />
      </ScrollView>
    );
  }
}
