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
                <p style={courseNameStyle}>course:{courseName}</p>
                <p style={routerStyle}>router:{router}</p>
            </div>
        )
    }
}
