import React, { Component } from "react";
import ReactDOM from "react-dom";

class ReactDOMfindDOMNode extends Component {
    constructor() {
        super();
        this.domGeneration = this.domGeneration.bind(this);
    }

    domGeneration = () => {
        var myDiv = document.getElementById("mydiv");
        ReactDOM.findDOMNode(myDiv).style.color = "blue";
    }

    render() {
        return (
            <div>
                <button onClick={this.domGeneration}>Generate DOM</button>
                <div id="mydiv">Node generation</div>
            </div>
        );
    }
}

export default ReactDOMfindDOMNode;
