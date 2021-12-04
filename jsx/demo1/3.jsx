import React, { Component } from "react";
export default class CompontentName extends Component {
    render() {
        let link = <a href="http://www.baidu.com">百度</a>;
        let S1 = {
            background: "#ff00ff",
            color: "#ff0",
            fontSize: "20px"
        }
        return (
            <div>
                {link}
                <p style={S1}>我是p</p>

            </div>
        )
    }
}