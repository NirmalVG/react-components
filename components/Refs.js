import React from "react";

class Refs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
        };
    }
    update(e) {
        this.setState({ data: this.refs.anything.value });
    }
    render() {
        return (
            <div>
                Enter details :
                <input
                    type="text"
                    ref="anything"
                    onChange={this.update.bind(this)}
                />
                <br />
                <em>{this.state.data}</em>
            </div>
        );
    }
}

export default Refs;
