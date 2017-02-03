// import Slider from '../slider/slider.js';
import { StyleSheet, View, Text, PanResponder, Animated, Dimensions, Image } from 'react-native';
import React, { Component } from 'react';

export default class Viewport extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
        x: props.image,
        pan: new Animated.ValueXY()
    };

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder : () => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
          this.state.pan.setValue({x: 0, y: 0});
        },
        onPanResponderMove           : Animated.event([null,{
            dx : this.state.pan.x,
            dy : this.state.pan.y
        }]),
        onPanResponderRelease        : (e, gesture) => {
          this.state.pan.flattenOffset();
        }
    });
  }

  renderDraggable(){
    return (
        <View>
            <Animated.View
                {...this.panResponder.panHandlers}
                style={[this.state.pan.getLayout(), {width: 40, height: 90, marginRight: 20 }]}>
                  {this.props.image}
            </Animated.View>
        </View>
    );
  }
  render(){
    return (
        <View>
            {this.renderDraggable()}
        </View>
    );
  }


}

let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    dropZone    : {
        height         : 100,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    }
});
