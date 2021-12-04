import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        let arr = [
            "tom", "age", "sex"
        ]
        return (
            <div>
                jsx模板自动遍历数组、
                {arr}
            </div>
        )
    }
}
