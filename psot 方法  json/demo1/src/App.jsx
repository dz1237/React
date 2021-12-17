import React, { Component } from 'react';
import axios from 'axios'
import './mock/data'
export default class App extends Component {
    state = {
        datas: []
    }
    render() {
        let { datas } = this.state
        return (
            <div>
                <h1>App组件</h1>
                <hr />
                <ul>
                    {
                        datas.map(value => {
                            return (
                                <li key={value.id}>
                                    编号：{value.id},
                                    姓名：{value.name},
                                    年龄：{value.age},
                                    性别：{value.sex}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {

        axios.post("data.php", {
            name: "hahh1",
            age: 32
        })
            .then(res => {
                console.log("res", res)
                this.setState({
                    datas: res.data.data
                })
            })
    }
}