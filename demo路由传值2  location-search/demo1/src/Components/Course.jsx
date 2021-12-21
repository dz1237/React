import React, { Component } from 'react'

export default class Course extends Component {
    render() {
        let url = new URLSearchParams(this.props.location.search)
        let courseName = url.get("courseName");
        let router = url.get("router");
        let courseNameStyle = { background: "#ff0" }
        let routerStyle = { background: "#0ff" }
        return (
            <div>
                <h1>Course组件</h1>
                <h3>location.search传过来的数据</h3>
                <p style={courseNameStyle}>courseName：{courseName}</p>
                <p style={routerStyle}>router:{router}</p>
            </div>
        )
    }
}
