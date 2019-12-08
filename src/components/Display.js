import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    displayValue: {
        flex: 3,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'flex-end',
    },
    displayHistory: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'flex-end',
    },
    displayValueText: {
        fontSize: 60,
    },
    displayHistoryText: {
        fontSize: 40,
        backgroundColor: '#f5f5f5',
        color: '#696969'
    }
})

export default props =>
    <View style={styles.container}>
        <View style={styles.displayValue}>
            <Text style={styles.displayValueText}
                numberOfLines={1} ellipsizeMode={'clip'}>{props.value}</Text>
        </View>
        <View style={styles.displayHistory}>
            <Text style={styles.displayHistoryText}
                numberOfLines={1} ellipsizeMode={'clip'}>{props.history}</Text>
        </View>
    </View>