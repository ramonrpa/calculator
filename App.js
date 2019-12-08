import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    SafeAreaView
} from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
    displayValue: '0',
    displayHistory: '',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
}

export default class App extends Component {

    state = { ...initialState }

    addDigit = n => {
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) return

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[this.state.current] = newValue
            this.setState({ values })
        }
    }

    clearMemory = () => {
        this.setState({ ...initialState })
    }

    setOperation = operation => {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const values = [...this.state.values]
            let displayHistory = ''
            try {
                displayHistory = `${values[0]} ${this.state.operation} ${values[1]}`
                values[0] =
                    eval(`${values[0]} ${this.state.operation} ${values[1]}`)
            } catch (e) {
                values[0] = this.state.values[0]
            }
            values[1] = 0
            this.setState({
                displayValue: `${values[0]}`,
                displayHistory,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
                values,
            })
        }
    }

    render() {
        const { displayValue, displayHistory } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#fff" />
                    <Display value={displayValue} history={displayHistory} />
                    <View style={styles.buttons}>
                        <Button label="C" operation double onClick={this.clearMemory} />
                        <Button label="÷" operation onClick={() => this.setOperation('/')} />
                        <Button label="x" operation onClick={() => this.setOperation('*')} />
                        <Button label="7" onClick={this.addDigit} />
                        <Button label="8" onClick={this.addDigit} />
                        <Button label="9" onClick={this.addDigit} />
                        <Button label="-" operation onClick={this.setOperation} />
                        <Button label="4" onClick={this.addDigit} />
                        <Button label="5" onClick={this.addDigit} />
                        <Button label="6" onClick={this.addDigit} />
                        <Button label="+" operation onClick={this.setOperation} />
                        <Button label="1" onClick={this.addDigit} />
                        <Button label="2" onClick={this.addDigit} />
                        <Button label="3" onClick={this.addDigit} />
                        <Button label="0" double onClick={this.addDigit} />
                        <Button label="." onClick={this.addDigit} />
                        <Button label="=" buttonDoubleHeight equals onClick={this.setOperation} />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

