import React, { Component } from 'react'

export default class Counter extends Component {

    state = { value: 0 };

    onIncrement = () => {
        this.setState(state => ({
            value: state.value + 1
        }));
    };

    onDecrement = () => {
        this.setState(state => ({
            value: state.value - 1
        }));
    };

    render() {
        return (
            <div>
                Counter: {this.state.value} <br/>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }

    countMe() {
        this.setState({ counter: this.state.counter + 1 })
    }
}
