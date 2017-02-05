import React, {Component} from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
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
            <Image source={require('../images/example1.png')} resizeMode={Image.resizeMode.contain} style={styles.example}/>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../images/gimme-a-break.png')} resizeMode={Image.resizeMode.contain} style={styles.example}/>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.createComicScreen.bind(this)}>
            <Text style={styles.buttonText}>
              Create New Comic
            </Text>
          </TouchableOpacity>
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
    marginTop: 8,
    width: 210,
    height: 210,
    justifyContent: 'center',
    alignItems: 'center'
  },
  example: {
    width: 205,
    height: 205
  },
  button: {
    marginTop: 8,
    backgroundColor: '#FACC11',
    padding: 13,
    borderRadius: 4
  },
  buttonText: {
    fontFamily: 'coming_soon',
  }
});
