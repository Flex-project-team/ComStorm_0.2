import React, { Component } from 'react';
import { Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { takeSnapshot } from 'react-native-view-shot';
import RNFS from 'react-native-fs';

export default class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.slider = props.slider;
    this.save = this.save.bind(this);
  }

  save() {
    console.log("this.slider:", this.slider);
    console.log("this.slider.refs[mainView]=", this.slider.refs["mainView"]);
    console.log("takeSnapshot=", takeSnapshot);

    takeSnapshot( this.slider.refs["mainView"], {
      format: "jpeg",
      quality: 0.8
    })
    .then((uri) => {
      this.copyImage(uri);
      this.props.navigator.push({ name: "MainScene" });
    }).catch((error) => console.error("Oops, snapshot failed", error));
  }

  copyImage(uri) {
    console.log("Image saved to", uri);
    let timestamp = Date.now();
    let fileName = "comic_" + timestamp + ".jpeg";
    let destFileLocation = RNFS.PicturesDirectoryPath + '/' + fileName;
    let localFilePath = uri.replace(/file:\/\//, "");
    console.log("destFileLocation = ", destFileLocation, "localFilePath = ", localFilePath);
    RNFS.copyFile(localFilePath, destFileLocation)
      .then(() => console.log("Copied File"))
      .catch((err) => console.log("Copy Error = ", err));
  }

  render() {
    return (
      <TouchableOpacity style={styles.saveButton} onPress={this.save}>
        <Text style={styles.saveButtonText}>
          Save as Image
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: '#FACC11',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 13,
    paddingLeft: 13,
    borderRadius: 4
  },
  saveButtonText: {
    fontFamily: 'coming_soon'
  }
});
