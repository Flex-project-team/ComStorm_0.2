import TextField from 'react-native-md-textinput';
import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';


export default class TextBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Enter text' };
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
      lnHeight = 18;
      charLimit = 40;
      img = require('../../images/transparent.png');
    } else {
      fSize = 11;
      fWeight = "bolder";
      containerStyle = styles.container;
      txtStyle = styles.txtBubbleInput;
      lnHeight = 11;
      img = this.props.img;
      charLimit = 60;
    }

    return (
        <Image source={img} style={containerStyle}>
          <TextInput
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
    // justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 110,
    resizeMode: "stretch",
    backgroundColor:'transparent',
    justifyContent: "flex-start"
  },
  capContainer: {
    borderWidth: 0.5,
    borderColor: '#E2E2DC',
    borderRadius: 4,
    padding: 10,
    zIndex: 1,
    width: 290,
    height: 40,
    // shadowColor: '#C6C6C0',
    // shadowOffset: { width: 2, height: 2},
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'transparent'
  },
    txtBubbleInput: {
      width: 90,
      height: 85,
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      bottom: 12,
      left: 10,
    },
    txtCaptionInput: {
      borderBottomColor: "#DDDDDD",
      fontStyle: 'italic',
      zIndex: 4,
      width: 240,
      height: 60,
      textAlign: "center"
    }
});
