import React, { Component } from 'react'
import Book from './Book'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home组件</h1>
                <hr />
                <Book />
            </div>
        )
    }
}
