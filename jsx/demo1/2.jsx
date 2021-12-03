import React, { Component } from 'react'

export default class App extends Component {
    render() {
        let nume = "tom";
        let nana = "susan";
        let special = {
            background: "#ff00ff",
            color: "#f00",
            fontSize: "32"
        }
        return (
            <div>
                这是app组件
                <p style={{ background: "#ff0", color: "#0ff", fontSize: "20px" }}>我是p</p>
                <p style={special}>我也是p</p>
                <a >我是{nume}</a>
                <a >我是{nana}</a>
            </div>
        )
    }
}
