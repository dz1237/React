import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        inEdit: false,
        flag: true
    }
    handleEdit = () => {
        let { todo } = this.props;
        this.setState({
            inEdit: true
        }, () => {
            this.refs.myInput.value = todo.value;
            this.refs.myInput.focus();
        })
    }
    render() {
        let { handleEdit } = this;
        let { inEdit, flag } = this.state;
        let { todo, delTodo, changeHasCompleted, editTodo } = this.props;
        let completed = todo.hasCompleted ? "completed" : "";
        let editing = inEdit ? completed + " editing" : completed;
        return (
            <li className={editing}>
                <div className="view">
                    <input
                        checked={todo.hasCompleted}
                        onChange={() => { changeHasCompleted(todo) }}
                        type="checkbox" name=""
                        className="toggle" id="" />
                    <label onDoubleClick={handleEdit}>
                        {todo.value}
                    </label>
                    <button className="destroy" onClick={() => { delTodo(todo) }} ></button>
                </div>
                <input type="text" ref="myInput" className="edit"
                    onBlur={ev => {
                        if (flag) {
                            todo.value = ev.target.value.trim();
                            editTodo(todo);
                            this.setState({ inEdit: false })
                        }
                    }}
                    onKeyUp={ev => {
                        if (ev.keyCode === 13) {
                            todo.value = ev.target.value.trim();
                            editTodo(todo);
                            this.setState({ inEdit: false })
                        }
                        if (ev.keyCode === 27) {
                            editTodo(todo);
                            this.setState({
                                inEdit: false,
                                flag: false
                            });
                            setTimeout(() => {
                                this.setState({
                                    flag: true
                                })
                            }, 10)
                        }
                    }
                    }
                />
            </li>
        )
    }
}