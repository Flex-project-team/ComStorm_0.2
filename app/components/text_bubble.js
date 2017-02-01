import TextField from 'react-native-md-textinput';
import React, {Component} from 'react';
import {ScrollView, StyleSheet, TextInput} from 'react-native';

export default class TextBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <ScrollView>
        <TextInput
          multiline={true}
          editable = {true}
          maxLength = {100}
          style={{height: 100, width: 300, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          borderColor={"#000000"}
          autoGrow={true}
         />
      </ScrollView>
    );
  }
}
