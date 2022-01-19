import React, { Component } from "react";

class Hooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }
    stateChange = () => {
        this.setState((prev, props) => ({ counter: prev.counter + 1 }));
    };
    componentWillMount() {
        console.log("componentWillMount");
    }
    render() {
        console.log("render");
        return (
            <div>
                <button onClick={this.stateChange}>Click Me</button>
                <p>You clicked {this.state.counter} times</p>
            </div>
        );
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
}

export default Hooks;
