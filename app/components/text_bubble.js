import TextField from 'react-native-md-textinput';
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
export default class TextBubble extends React.Component {
  render() {
    return (
      <ScrollView>
        <TextField label={'Name'} highlightColor={'#00BCD4'} />
      </ScrollView>
    );
  }
}
