import React, { Component } from "react";

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }
    stateChange() {
        setTimeout(() => {
            this.setState((prev, props) => ({ counter: prev.counter + 1 }));
        }, 1000);
    }
    render() {
        this.stateChange();
        return (
            <div>
                <h2>{this.state.counter}</h2>
            </div>
        );
    }
}

export default State;
