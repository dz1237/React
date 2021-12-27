import React, { Component } from 'react'

export default class App extends Component {
    state = {
        msg: "",
        show: { display: "block" }
    }
    login = () => {

        let form = document.querySelector("form");
        console.log(form)

        fetch("/data", {
            method: "POST",
            body: new FormData(form)
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
                    用户名：<input type="text" onFocus={this.handleFocus} name="userName" />
                    <br />
                    密码：<input type="password" name="pwd" onFocus={this.handleFocus} />
                    <br />
                    <input type="button" onClick={this.login} value="登录" />
                </form>
            </div>
        )
    }
}
