import React, { Component } from "react";
export default class App extends Component {
    state = {
        txt: ""
    }
    render() {
        let { txt } = this.state;
        return (
            <div>
                <h3>App组件</h3>
                <hr />
                <p>{txt}</p>
            </div>
        )
    }
    componentDidMount() {
        fetch("../mock/data.html")
            .then(response => {
                return response.text();
            }).then(txt => {
                this.setState({ txt })
            }).catch(error => {
                alert(error.message)
            })
    }
}