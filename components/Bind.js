import React, { Component } from "react";

class Bind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nirmal",
            date: "",
            value: "",
        };
        this.updateName = this.updateName.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }
    updateName(n) {
        this.setState({ name: n.target.value });
    }
    updateDate(d) {
        this.setState({ date: d.target.value });
    }
    updateValue(v) {
        this.setState({ value: v.target.value });
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.updateName}
                ></input>
                <br />
                <br />
                <input
                    type="date"
                    value={this.state.date}
                    onChange={this.updateDate}
                ></input>
                <br />
                <br />
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.updateValue}
                ></input>
                <h1>{this.state.value}</h1>
            </div>
        );
    }
}

export default Bind;
