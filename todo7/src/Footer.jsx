import React, { Component } from 'react'
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{0}</strong>
                    <span>item left</span>
                </span>
                <ul className="filters">
                    <li><a href="#/all">all</a></li>
                    <li><a href="#/active">active</a></li>
                    <li><a href="#/completed">completed</a></li>
                </ul>
                <button className="clear-completed">
                    Clear component
                </button>
            </footer>
        )
    }
}