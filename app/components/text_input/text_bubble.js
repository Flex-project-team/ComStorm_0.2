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
    let fSize;
    let fWeight;
    let containerStyle;
    let txtStyle;
    let lnHeight;
    let img;
    let charLimit;
    if (this.props.img === require('../../images/caption.png')) {
      fSize = 16;
      fWeight = "bold";
      containerStyle = styles.capContainer;
      txtStyle = styles.txtCaptionInput;
      lnHeight = 24;
      charLimit = 30;
      img = require('../../images/transparent.png');
    } else {
      fSize = 12;
      fWeight = "bolder";
      containerStyle = styles.container;
      txtStyle = styles.txtBubbleInput;
      lnHeight = 10;
      img = this.props.img;
      charLimit = 60;
    }
    return (
        <Image source={img} style={containerStyle}>
          <TextInput
            onSubmitEditing={(event) => Keyboard.dismiss()}
            adjustsFontSizeToFit={true}
            fontFamily='coming_soon'
            fontSize={fSize}
            fontWeight={fWeight}
            lineHeight={lnHeight}
            multiline={true}
            editable = {true}
            maxLength = {charLimit}
            style={txtStyle}
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
    alignItems: "center",
    width: 110,
    height: 110,
    resizeMode: "stretch",
    backgroundColor:'transparent',
    justifyContent: "flex-start"
  },
  capContainer: {
    padding: 2,
    borderColor: "#e2e2e2",
    borderWidth: 1,
    zIndex: 1,
    width: 310,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'transparent',
  },
    txtBubbleInput: {
      width: 90,
      height: 85,
      textAlign: "center",
      position: "absolute",
      bottom: 14,
      left: 10,
    },
    txtCaptionInput: {
      zIndex: 4,
      width: 270,
      height: 50,
      textAlign: "center"
    }
});
