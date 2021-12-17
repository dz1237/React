





// import React, { Component } from "react";
// import './css/style.css';
// import axios from 'axios';
// import './mock/data1';
// import './mock/data2';
// export default class App extends Component {
//     state = {
//         stus: [],
//         prods: [],
//         loadingStus: true,
//         loadingProds: true,
//     }
//     render() {
//         let { stus, prods, loadingProds, loadingStus } = this.state
//         let loading1 = loadingProds ? "loading" : "";
//         let loading2 = loadingStus ? "loading" : ""
//         return (
//             <div>
//                 <h1>App组件</h1>
//                 <hr />
//                 <ul className={loading1}>
//                     {
//                         stus.map(value => {
//                             return (
//                                 <li key={value.id}>
//                                     学号：{value.id},
//                                     姓名：{value.name}
//                                     年龄：{value.age}
//                                     性别：{value.sex}
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//                 <hr />
//                 <ul className={loading2}>
//                     {
//                         prods.map(value => {
//                             return (
//                                 <li key={value.prodId}>
//                                     编号：{value.prodId},
//                                     名称：{value.prodname}
//                                     价格：{value.price}
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
//     componentDidMount() {
//         axios.all([
//             axios.get("data1.php"),
//             axios.get("data2.php"),
//         ])
//             .then(axios.spread((res1, res2) => {
//                 this.setState({
//                     stus: res1.data.data,
//                     prods: res2.data.data,
//                     loadingStus: false,
//                     loadingProds: false
//                 })
//             }))
//     }

// }

import React, { Component } from "react";
import './css/style.css'
import axios from 'axios';
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
        let { stus, prods, loadingStus, loadingProds } = this.state

        let loading1 = loadingStus ? "loading" : ""
        let loading2 = loadingProds ? "loading" : ""
        return (
            <div>
                <h1>App组件</h1>
                <hr />
                <ul className={loading1}>
                    {
                        stus.map(value => {
                            return (
                                <li key={value.id}>
                                    学号：{value.id},
                                    姓名：{value.name}
                                    年龄：{value.age}
                                    性别：{value.sex}
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
                                    名称：{value.prodname}
                                    价格：{value.price}
                                </li>
                            )
                        })
                    }
                </ul>
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
                    loadingProds: false,
                    loadingStus: false
                })
            }))
    }
}
