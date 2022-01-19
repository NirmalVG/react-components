import React, {Component} from 'react';

class Class extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2>Roll No: CS{this.props.id}</h2>
        );
    }
}

export default Class;