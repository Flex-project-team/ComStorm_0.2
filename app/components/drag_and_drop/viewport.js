import React,{
    Component,
    StyleSheet,
    View,
    Text,
    PanResponder,
    Animated,
    Dimensions
} from 'react-native';

export default class Viewport extends Component{
    render(){
        return (
            <View style={styles.mainContainer}>
                <View style={styles.dropZone}>
                    <Text style={styles.text}>Drop me here!</Text>
                </View>

                {this.renderDraggable()}
            </View>
        );
    }

    renderDraggable(){
        return (
            <View style={styles.draggableContainer}>
                <Animated.View style={styles.circle}>
                    <Text style={styles.text}>Drag me!</Text>
                </Animated.View>
            </View>
        );
    }
}
