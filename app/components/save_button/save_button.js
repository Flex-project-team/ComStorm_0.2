import React, { Component } from 'react';
import { Button } from 'react-native';
import RNViewShot from "react-native-view-shot";

export default class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.mainView = props.mainView;
    this.save = this.save.bind(this);
  }

  save() {
    console.log(`this.mainView: ${this.mainView}`);

      RNViewShot.takeSnapshot( this.refs["mainView"], {
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
      <Button
      onPress={this.save}
      title="Save as Image"
      color="#8833FF"
      accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}
