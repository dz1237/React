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
                    <li>
                        <a href="#/all"
                            onClick={() => { filterTodo("all") }}
                            className={view === "all" ? "selected" : ""}>All</a>
                    </li>
                    <li>
                        <a href="#/active"

                            onClick={() => { filterTodo("active") }}
                            className={view === "active" ? "selected" : ""}>Active</a>
                    </li>
                    <li>
                        <a href="#/complete"
                            onClick={() => { filterTodo("completed") }}
                            className={view === "completed" ? "selected" : ""}>Complete</a>
                    </li>
                </ul>
                <button className="clear-completed"
                    onClick={clearCompleted}>
                    Clear completed
                </button>
            </footer >

        )
    }
}