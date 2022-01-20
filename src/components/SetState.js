import React, { Component } from "react";

class SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.stateHandler = this.stateHandler.bind(this);
    }

    stateHandler = () => {
        var s = " State change ";
        var myArray = this.state.data.slice();
        myArray.push(s);
        this.setState({ data: myArray });
    };

    render() {
        return (
            <div>
                <button onClick={this.stateHandler}>Set State</button>
                <h4>Array = {this.state.data}</h4>
            </div>
        );
    }
}

export default SetState;
