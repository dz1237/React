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
                        <a href="#/all"
                            onClick={ev => { filterTodo("all") }}
                            className={view === "all" ? "selected" : ""}>All</a>
                    </li>
                    <li>
                        <a href="#/active"
                            className={view === "active" ? "selected" : ""}
                            onClick={ev => { filterTodo("active") }}>Active</a>

                    </li>
                    <li>
                        <a href="#/complete"
                            className={view === "completed" ? "selected" : ""}
                            onClick={ev => { filterTodo("completed") }}>Complete</a>
                    </li>
                </ul>
                {/* <button className="clear-completed" onClick={clearCompleted}>
                    Clear commpleted
                </button> */}
                <button className="clear-completed"
                    onClick={clearCompleted}>
                    Clear commpleted
                </button>
            </footer >

        )
    }
}
