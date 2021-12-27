import React, { Component } from 'react'

export default class App extends Component {
    state = {
        msg: "",
        show: { display: "block" }
    }
    login = () => {
        let userName = this.refs.userName.value.trim();
        let pwd = this.refs.pwd.value.trim();


        fetch("/data", {
            method: "POST",
            body: JSON.stringify({ userName: userName, pwd: pwd })
        })
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json.status)
                if (json.status == "10001") {
                    this.setState({
                        msg: json.msg,
                        show: { display: "none" }
                    })
                }
                else {
                    this.setState({
                        msg: json.msg
                    })
                }
            })
    }
    handleFocus = () => {
        console.log("122")
        this.setState({
            msg: ""
        })
    }
    render() {
        let { msg, show } = this.state;
        return (
            <div>
                <div ref="tips">{msg}</div>
                <form style={show}>
                    用户名：<input type="text" onFocus={this.handleFocus} ref="userName" />
                    <br />
                    密码：<input type="password" ref="pwd" onFocus={this.handleFocus} />
                    <br />
                    <input type="button" onClick={this.login} value="登录" />
                </form>
            </div>
        )
    }
}
