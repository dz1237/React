import React, { Component } from 'react'

export default class Footer extends Component {
    render() {

        let { todoNum, view, filterTodo, clearCompleted } = this.props
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{todoNum}</strong>
                    <span>{todoNum >= 2 ? "items" : "item"} left</span>
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/all" className="selected" onClick={ev => { filterTodo("all") }}
                            className={view === "all" ? "selected" : ""}
                        >all</a>
                    </li>
                    <li>
                        <a href="#/active" onClick={ev => { filterTodo("active") }}
                            className={view === "active" ? "selected" : ""}
                        >active</a>
                    </li>
                    <li>
                        <a href="#/completed " onClick={ev => { filterTodo("completed") }}
                            className={view === "completed" ? "selected" : ""}
                        >completed</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={clearCompleted}>
                    Clear commpleted
                </button>
            </footer >
        )
    }
}
