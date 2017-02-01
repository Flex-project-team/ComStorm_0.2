import TextField from 'react-native-md-textinput';
import React, {Component} from 'react';
import {ScrollView, StyleSheet, TextInput, Image } from 'react-native';

export default class TextBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <ScrollView scrollable={false} style={{backgroundColor:'transparent'}}>
        <Image source={require('../../images/speech-down.png')} style={styles.container}>
          <TextInput
            adjustsFontSizeToFit={true}
            fontSize={12}
            multiline={true}
            editable = {true}
            maxLength = {60}
            style={styles.txtInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            underlineColorAndroid='rgba(0,0,0,0)'
           />
         </Image>
      </ScrollView>
    );
  };
}


var styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 1,
    flex: 1,
    width: 110,
    height: 110,
    resizeMode: "stretch",
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    txtInput: {
      width: 95,
      height: 105,
      textAlign: "center",
      position: "absolute",
      bottom: 18,
      left: 6,
    },
    bgImage: {
        flex: 1,
        resizeMode: "contain",
        height: 20,
        width: 20,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
