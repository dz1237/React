
import React, { Component } from 'react'
export default class Cool extends Component {
    handleClick = () => {
        let { history } = this.props;
        history.push("/news/react全家桶/react-router4")
    }

    render() {
        console.log("cool this.props", this.props)
        return (
            <div>
                <h1>Cool组件</h1>
                <button onClick={this.handleClick}>点击跳转</button>
            </div>
        )
    }
}
