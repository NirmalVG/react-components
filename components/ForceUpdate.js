import React, { Component } from "react";

class ForceUpdate extends Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
    }

    updateState = () => {
        this.forceUpdate();
    };

    render() {
        return (
            <div>
                <button onClick={this.updateState}>Force Update</button>
                <h4>Print Random Number: {Math.random()}</h4>
            </div>
        );
    }
}

export default ForceUpdate;
