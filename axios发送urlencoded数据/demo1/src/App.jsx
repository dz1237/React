import React, { Component } from 'react'
import axios from 'axios'
import './css/style.css'
import './mock/data'

export default class App extends Component {
    state = {
        stus: [],

        loadingStus: true,

    }
    render() {
        let { stus, loadingStus, } = this.state;
        let loading1 = loadingStus ? "loading" : ""
        return (
            <div>
                <div>
                    <h1>App组件</h1>
                    <hr />
                    <ul className={loading1}>
                        {
                            stus.map(value => {
                                return (
                                    <li key={value.id}>
                                        学号：{value.id},
                                        姓名：{value.name},
                                        年龄：{value.age},
                                        性别：{value.sex},
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>
        )
    }
    componentDidMount() {
        let params = new URLSearchParams();
        params.append("name", "赵四");
        params.append("age", 32);
        axios({
            url: "data.php",
            method: "POST",
            data: params
        })
            .then(res => {
                this.setState({
                    stus: res.data.data,
                    loadingStus: false
                })
            })
    }

}
