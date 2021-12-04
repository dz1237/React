import React, { Components } from 'react'

export default class componentName extends Component {
    render() {
        let obj = {
            status: "10001", msg: "ok", data: [
                { id: "10001", name: "刘能", age: 20, sex: "男" },
                { id: "10002", name: "长贵", age: 19, sex: "男" },
                { id: "10003", name: "广坤", age: 22, sex: "男" },
                { id: "10004", name: "赵四", age: 21, sex: "男" },
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
                                    姓名：{value.name},
                                    年龄：{value.age}，
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






