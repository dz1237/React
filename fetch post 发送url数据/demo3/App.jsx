import React, { Component } from "react";
export default class App extends Component {
    state = {
        show: { display: "block" },
        msg: ""
    }
    login = () => {
        let userName = this.refs.userName.value.trim();
        let pwd = this.refs.pwd.value.trim();
        let param = new URLSearchParams();
        param.append("userName", userName);
        param.append("pwd", pwd);
        fetch("/data", {
            method: "POST",
            body: param,
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                if (json.status === "10001") {
                    this.setState({
                        msg: json.msg,
                        show: { display: "none" }
                    })
                }
                else {
                    this.setState({
                        msg: json.msg,

                    })
                }
            })
    }
    render() {
        let { msg, show } = this.state
        return (
            <div>
                <h1>App组件</h1>
                <hr />
                <div ref="tips">{msg}</div>
                <form style={show}>
                    用户名：<input type="text" ref="userName" />
                    <br />
                    密码：<input type="password" ref="pwd" />
                    <br />
                    <input type="button" onClick={this.login} value="登录" />
                </form>
            </div>
        )
    }
}