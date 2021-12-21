import React, { Component } from 'react'

export default class News extends Component {

    render() {
        let { title, content } = this.props.match.params;
        let style = { background: "#ff0" };
        let contentStyle = { background: "#f0f" }
        return (
            <div>
                <h1>News组件</h1>
                <p>通过路由传的值是：</p>
                <p style={style}>title:{this.props.match.params.title}</p>
                <p style={contentStyle}>title:{this.props.match.params.content}</p>
                <p style={style}>title:{title}</p>
                <p style={contentStyle}>content:{content}</p>
            </div >
        )
    }
}
