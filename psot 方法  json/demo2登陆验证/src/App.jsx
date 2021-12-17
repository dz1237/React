import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
    state = {
        msg: "",
        show: { display: "block" }
    }
    login = () => {
        let userName = this.refs.userName.value.trim();
        let pwd = this.refs.pwd.value.trim();
        axios.post("/check", {
            userName: userName,
            pwd: pwd
        })
            .then(res => {
                if (res.data.status === "10001") {
                    this.setState({
                        msg: res.data.msg,
                        show: { display: "none" }
                    })
                }
                else {
                    this.setState({
                        msg: res.data.msg,

                    })
                }
            })
    }
    render() {
        let { msg, show } = this.state;
        return (
            <div>
                <h1>App组件</h1>
                <hr /><div ref="tips">{msg}</div>
                <form style={show}>

                    用户名：<input type="text" ref="userName" />
                    <br />
                    密码：<input type="password" ref="pwd" />
                    <br />
                    <input onClick={this.login} type="button" value="登录" />
                </form>
            </div>
        )
    }
}
