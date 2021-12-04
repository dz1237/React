import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        let obj = {
            status: "10001", msg: "ok", data: [
                { id: "100001", name: "tom", age: 19, sex: "男" },
                { id: "100001", name: "jarray", age: 19, sex: "女" },
                { id: "100001", name: "Susan", age: 19, sex: "女" },
                { id: "100001", name: "赵四", age: 19, sex: "男" }

            ]
        }
        return (
            <div>
                <ul>
                    {
                        obj.data.map((value, index) => {
                            <li key={value.id}>
                                序号：{value.id},
                                姓名：{value.name},
                                年龄：{value.age},
                                性别：{value.sex}
                            </li>
                        })
                    }
                </ul>
            </div >
        )
    }
}
