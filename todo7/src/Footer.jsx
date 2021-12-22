import React, { Component } from 'react'
export default class Footer extends Component {
    render() {
        let { todoNum, filterTodo, view, clearCompleted } = this.props
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{todoNum}</strong>
                    <span>{todoNum >= 2 ? "items" : "item"} left</span>
                </span>
                <ul className="filters">
                    <li><a href="#/all"
                        className={view === "all" ? "selected" : ""}
                        onClick={ev => { filterTodo("all") }}>all</a></li>
                    <li><a href="#/active"
                        className={view === "active" ? "selected" : ""}
                        onClick={ev => { filterTodo("active") }}>active</a></li>
                    <li><a href="#/completed"
                        className={view === "completed" ? "selected" : ""}
                        onClick={ev => { filterTodo("completed") }}>completed</a></li>
                </ul>
                <button className="clear-completed"
                    onClick={clearCompleted}>
                    Clear component
                </button>
            </footer>
        )
    }
}