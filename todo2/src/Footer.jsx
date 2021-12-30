import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        let { todoNum, filterTodo, view, clearCompleted } = this.props
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{todoNum}</strong>
                    <span>{todoNum < 2 ? "item" : "items"} left</span>
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/all" onClick={ev => filterTodo('all')}
                            className="selected" className={view === "all" ? "selected" : ""}>all</a>
                    </li>
                    <li>
                        <a href="#/active" onClick={ev => filterTodo('active')}
                            className={view === "active" ? "selected" : ""}
                        >active</a>
                    </li>
                    <li>
                        <a href="#/completed " onClick={ev => filterTodo('completed')}
                            className={view === "completed" ? "selected" : ""}
                        >completed</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
            </footer>
        );
    }
}
