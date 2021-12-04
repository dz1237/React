import React, { Component } from "react";
export default class ComponentName extends Component {
    render() {
        let obj = {
            status: "10001", msg: "ok", data: [
                { id: "1001", name: "赵四", age: 19, sex: "男" },
                { id: "1002", name: "老七", age: 19, sex: "男" },
                { id: "1003", name: "刘能", age: 19, sex: "男" },
                { id: "1004", name: "长贵", age: 19, sex: "男" },
            ]
        }
        return (
            <div>
                <ul>
                    {
                        obj.data.map((value) => {
                            return (
                                <li key={value.id}>
                                    序号：{value.id},
                                    姓名：{value.name}，
                                    性别：{value.sex}，
                                    年龄：{value.age}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}