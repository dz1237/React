import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        let arr = [
            "tom", "jarray", "susan", "赵四"
        ]
        return (
            <div>
                <p>jsx模板自动遍历数组</p>
                {
                    arr
                }
            </div>
        )
    }
}
