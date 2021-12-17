import React, { Component } from 'react'
import axios from 'axios'
import './css/style.css'
import './mock/data1'
import './mock/data2'
export default class App extends Component {
    state = {
        stus: [],
        prods: [],
        loadingStus: true,
        loadingProds: true
    }
    render() {
        let { stus, loadingStus, prods, loadingProds } = this.state;
        let loading1 = loadingStus ? "loading" : ""
        let loading2 = loadingProds ? "loading" : ""
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
                    <hr />
                    <ul className={loading2}>
                        {
                            prods.map(value => {
                                return (
                                    <li key={value.prodId}>
                                        编号：{value.prodId},
                                        名称：{value.prodName},
                                        价格：{value.price},

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
        axios.all([
            axios.get("data1.php"),
            axios.get("data2.php")
        ])
            .then(axios.spread((res1, res2) => {
                this.setState({
                    stus: res1.data.data,
                    prods: res2.data.data,
                    loadingStus: false,
                    loadingProds: false
                })
            }))
    }

}
