// // import React, { Component } from 'react'

// // export default class App extends Component {
// //     state = {
// //         data: []
// //     }
// //     render() {
// //         let { data } = this.state;
// //         return (
// //             <div>
// //                 <h3>App组件</h3>
// //                 <ul>
// //                     {
// //                         data.map(value => {
// //                             return (
// //                                 <li key={value.id}>
// //                                     编号：{value.id},
// //                                     姓名：{value.name},
// //                                     年龄：{value.age},
// //                                     性别：{value.sex}
// //                                 </li>
// //                             )

// //                         })
// //                     }
// //                 </ul>
// //                 <div>hahah1</div>
// //             </div>
// //         )
// //     }
// //     componentDidMount() {
// //         fetch("../mock/data.json")
// //             .then(response => {
// //                 return response.json()
// //             }).then(json => {
// //                 this.setState({ data: json.data })
// //             })
// //     }
// // }



// import React, { Component } from "react";
// export default class App extends Component {
//     state = {
//         data: []
//     }
//     render() {
//         let { data } = this.state
//         return (
//             <div>
//                 <h1>App组件</h1>
//                 <hr />
//                 <ul>
//                     {
//                         data.map(value => {
//                             return (
//                                 <li key={value.id}>
//                                     编号：{value.id},
//                                     姓名：{value.name},
//                                     年龄：{value.age},
//                                     性别：{value.sex}
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
//     componentDidMount() {
//         fetch("../mock/data.json")
//             .then(response => {
//                 return response.json()
//             }).then(json => {
//                 this.setState({
//                     data: json.data
//                 })
//             })
//     }
// }


import React, { Component } from "react";
export default class App extends Component {
    state = {
        data: []
    }
    render() {
        let { data } = this.state
        return (
            <div>
                <h1>App组件</h1>
                <hr />
                <ul>
                    {
                        data.map(value => {
                            return (
                                <li key={value.id}>
                                    编号：{value.id}
                                    姓名：{value.name}
                                    年龄：{value.age}
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
        fetch("../mock/data.json")
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    data: json.data
                })
            })
    }
}