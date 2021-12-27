import React, { Component } from "react";
export default class App extends Component {
    state = {
        show: { display: "block" },
        msg: ""
    }
    login = () => {
        let userName = this.refs.userName.value.trim();
        let pwd = this.refs.pwd.value.trim();
        let prarm = new URLSearchParams();
        prarm.append("userName", userName);
        prarm.append("pwd", pwd);
        fetch("/data", {
            method: "POST",
            body: prarm,
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
        let { show, msg } = this.state;
        return (
            <div>
                <h1>App组件</h1>
                <hr />
                <div ref="tips">{msg}</div>
                <form style={show}>
                    用户名：<input type="text" ref="userName" />
                    <br />
                    密码<input type="text" ref="pwd" />
                    <br />
                    <input type="button" value="登录" onClick={this.login} />
                </form>
            </div>
        )
    }
}