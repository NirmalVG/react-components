import React, { Component } from "react";
import axios from "axios";

class Httpaccesspost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            username: "",
            email: "",
            phone: "",
            website: "",
        };
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios
            .post("https://jsonplaceholder.typicode.com/users", this.state)
            .then((response) => {
                console.log(response);
                this.setState({ data: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        const { id, name, username, email, phone, website } = this.state;
        return (
            <div>
                <h1>HTTP Access POST</h1>
                <form onSubmit={this.handleSubmit}>
                    <select name="id" value={id} onChange={this.changeHandler}>
                        <option value="id">Id</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <br />
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.changeHandler}
                        placeholder="Name"
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.changeHandler}
                        placeholder="Username"
                    />
                    <br />
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.changeHandler}
                        placeholder="Email"
                    />
                    <br />
                    <br />
                    <input
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={this.changeHandler}
                        placeholder="Phone"
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        name="website"
                        value={website}
                        onChange={this.changeHandler}
                        placeholder="Website"
                    />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Httpaccesspost;
