import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        let obj = {
            status: "10001", msg: "ok", data: [
                {
                    id: "10001", name: "tom", age: 19, sex: "男"
                },
                {
                    id: "10002", name: "susan", age: 19, sex: "女"
                },
                {
                    id: "10003", name: "jarrar", age: 19, sex: "女"
                }
                ,
                {
                    id: "10004", name: "zhaois", age: 19, sex: "男"
                }
            ]
        };
        return (
            <div><ul>
                {
                    obj.data.map((value) => {
                        return (
                            <li>
                                序号：{value.id},
                                姓名：{value.name},
                                年龄：{value.age},
                                性别：{value.sex}
                            </li>
                        )
                    })
                }</ul>
            </div>
        )
    }
}
