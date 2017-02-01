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
      <View>
        <View style={styles.nav}>
          <Image source={require('../images/logo.png')} style={{margin: 10 }}/>
        </View>
          <Text> Add main screen details 1 </Text>
          <Text> Add main screen details 2 </Text>
          <Text> Add main screen details 3 </Text>
          <Text> Add main screen details 4 </Text>
          <Text> Add main screen details 5 </Text>
          <Button
            onPress={this.createComicScreen.bind(this)}
            title="Create Comic"
            color="#841584"
            accessibilityLabel="Learn more about this purple button" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF9E9',
  }
});
