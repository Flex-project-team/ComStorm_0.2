import { StyleSheet, View, Text, PanResponder, Animated, Dimensions } from 'react-native';
import React, { Component } from 'react';

export default class Viewport extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        pan: new Animated.ValueXY()
    };

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder : () => true,
        onPanResponderMove           : Animated.event([null,{
            dx : this.state.pan.x,
            dy : this.state.pan.y
        }]),
        onPanResponderRelease        : (e, gesture) => {}
    });
  }

  renderDraggable(){
    return (
        <View style={styles.draggableContainer}>
            <Animated.View
                {...this.panResponder.panHandlers}
                style={[this.state.pan.getLayout(), styles.circle]}>
                <Text style={styles.text}>Drag me!</Text>
            </Animated.View>
        </View>
    );
  }
  render(){
    return (
        <View style={styles.mainContainer}>
                {// <Text style={styles.text}>Drop me here!</Text>
              }

            {this.renderDraggable()}
        </View>
    );
  }

}

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});
