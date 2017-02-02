import React, { Component } from 'react';
import { Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { takeSnapshot } from 'react-native-view-shot';

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
      quality: 0.8,
      collapsable: false,
    })
    .then(
      uri => console.log("Image saved to", uri),
      error => console.error("Oops, snapshot failed", error)
    );
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
    padding: 13,
    borderRadius: 4
  },
  saveButtonText: {
    fontFamily: 'coming_soon'
  }
});
