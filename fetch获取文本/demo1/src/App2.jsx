import React, { Component } from 'react'

export default class App extends Component {
    render() {
        let obj = {
            status: "10001",
            msg: "200",
            data: [
                {
                    id: "1", name: "tom", age: 19, sex: "男"
                },
                {
                    id: "2", name: "jarray", age: 20, sex: "女"
                },
                {
                    id: "3", name: "susaun", age: 20, sex: "女"
                },
                {
                    id: "4", name: "zhaosi", age: 20, sex: "男"
                }

            ]
        }
        return (
            <div>
                <ul>
                    {
                        obj.data.map((value) => {
                            return (<li key={value.id}>
                                学号：{value.id},
                                姓名：{value.name},
                                年龄：{value.age},
                                性别：{value.sex},
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
