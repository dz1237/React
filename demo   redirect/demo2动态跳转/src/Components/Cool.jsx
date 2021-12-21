import { Redirect } from "react-router-dom";
import React, { Component } from 'react'
export default class Cool extends Component {
    render() {
        console.log("cool this.props", this.props);
        let { user } = this.props.match.params;
        console.log("user", user)
        return (
            user == "tom" ? <Redirect to="/" /> : <div>
                <h1>Cool组件</h1>
                <p>user:{user}</p>
            </div>
        )
    }
}
