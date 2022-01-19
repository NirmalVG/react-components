import React, { Component } from "react";
import axios from "axios";

class Httpaccessget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response);
            this.setState({ data: response.data });
        })
        .catch(error => {
            console.log(error);
        });
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <h1>HTTP Access GET</h1>
                <table border="2">
                    {
                        data.length?
                        data.map(article => 
                            <tr>
                                <td>{article.id}</td>
                                <td>{article.title}</td>
                            </tr>
                        )
                        :null
                    }
                </table>
            </div>
        );
    }
}

export default Httpaccessget;
