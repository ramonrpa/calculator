import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        borderWidth: 0.5,
        borderColor: '#c7c7c7',
        textAlignVertical: 'center',
    },
    operationButton: {
        color: '#2088d6',
        backgroundColor: '#fff',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonDoubleHeight: {
        height: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
    equals: {
        backgroundColor: '#2088d6',
        color: '#fff',
    },
    equalsTouchable: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})

export default props => {
    const stylesButton = [styles.button]
    const styleTouchableHighlight = []
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.buttonDoubleHeight) stylesButton.push(styles.buttonDoubleHeight)
    if (props.equals) {
        stylesButton.push(styles.equals)
        styleTouchableHighlight.push(styles.equalsTouchable)
    }
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight style={styleTouchableHighlight} onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}