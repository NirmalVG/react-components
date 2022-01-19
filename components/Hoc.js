import React, { Component } from "react";

var newData = {
    data: "Data from Hoc",
};

var myHoc = (ComposedComponent) =>
    class extends Component {
        componentDidMount() {
            this.setState({ data1: newData.data });
        }
        render() {
            return (
                <ComposedComponent
                    {...this.props}
                    {...this.state}
                ></ComposedComponent>
            );
        }
    };

class Hoc extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.data1}</h1>
            </div>
        );
    }
}

export default myHoc(Hoc);
