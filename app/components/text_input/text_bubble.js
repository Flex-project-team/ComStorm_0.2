import TextField from 'react-native-md-textinput';
import React, {Component} from 'react';
import {ScrollView, StyleSheet, TextInput, Image } from 'react-native';
import {Keyboard} from 'react-native';

export default class TextBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
        <Image source={this.props.img} style={styles.container}>
          <TextInput
            onSubmitEditing={(event) => Keyboard.dismiss()}
            adjustsFontSizeToFit={true}
            fontFamily='coming_soon'
            fontSize={10}
            lineHeight={11}
            multiline={true}
            editable = {true}
            maxLength = {50}
            style={styles.txtInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            underlineColorAndroid='rgba(0,0,0,0)'
           />
         </Image>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    padding: 5,
    position: "relative",
    zIndex: 1,
    flex: 1,
    justifyContent: "center",
    width: 110,
    height: 110,
    resizeMode: "stretch",
    backgroundColor:'transparent',
    justifyContent: "flex-start"
  },
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    txtInput: {
      width: 90,
      height: 90,
      textAlign: "center",
      position: "absolute",
      bottom: 16,
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
