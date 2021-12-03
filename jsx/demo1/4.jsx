import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        let nume = "tom";
        let nana = "jass";
        let S1 = {
            background: "#f0f",
            color: "#ff0",
            fontSize: "32px"
        }
        return (
            <div>
                <a style={S1}>我是{nume}</a>
                <a style={{ background: "#f00", color: "10px" }}>我是{nana}</a>
            </div>
        )
    }
}
