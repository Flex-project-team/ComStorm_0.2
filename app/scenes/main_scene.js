import React, {Component} from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

export default class MainScene extends Component {
  constructor(props) {
    super(props);
  }

  createComicScreen() {
    this.props.navigator.push({ name: "ComicScene" });
  }

  render() {
    return (
      <View style={styles.screenView}>
        <View style={styles.nav}>
          <Image source={require('../images/logo.png')} style={{margin: 10 }}/>
        </View>
        <View style={styles.main}>
          <View style={styles.imageContainer}>
            <Image source={require('../images/character.png')} style={styles.example}/>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../images/gimme-a-break.png')} style={styles.example}/>
          </View>
          <Button
            style={styles.button}
            onPress={this.createComicScreen.bind(this)}
            color='#FACC11'
            title="Create Comic"
            accessibilityLabel="Learn more about this purple button" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    backgroundColor: '#FBF9E9'
  },
  nav: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF9E9',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF9E9'
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 7,
    margin: 8,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  example: {
    margin: 10,
    width: 115,
    height: 160,
  },
  button: {
    // marginTop: 25
  }
});