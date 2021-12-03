import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        let obj = {
            status: "10001", msg: "ok", data: [
                { id: "1001", name: "tom", age: 19, sex: "男" },
                { id: "1002", name: "jarray", age: 20, sex: "女" },
                { id: "1003", name: "susan", age: 19, sex: "女" },
                { id: "1004", name: "zhaosi", age: 22, sex: "男" },
            ]
        }
        return (
            <div>
                <ul>
                    {
                        obj.data.map((value) => {
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
}
