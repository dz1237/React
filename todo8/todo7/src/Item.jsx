import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        inEdit: false,
        flag: true
    }
    handleclick = () => {
        let { todo } = this.props
        this.setState({
            inEdit: true
        }, () => {
            this.refs.myInput.value = todo.value;
            this.refs.myInput.focus()
        })
    }
    render() {
        let { inEdit, flag, } = this.state
        let { todo, delTodo, changeHasCompleted, editTodo, } = this.props;
        let completed = todo.hasCompleted ? "completed" : "";
        let editing = inEdit ? completed + " editing" : completed;
        return (

            <li className={editing}>
                <div className="view">
                    <input type="checkbox" className="toggle"
                        checked={todo.hasCompleted}
                        onChange={() => {
                            changeHasCompleted(todo)
                        }} />
                    <label onDoubleClick={this.handleclick} >
                        {todo.value}
                    </label>
                    <button className="destroy" onClick={() => { delTodo(todo) }}></button>
                </div>
                <input type="text" ref="myInput" className="edit"
                    onBlur={ev => {
                        if (flag) {
                            todo.value = ev.target.value.trim();
                            editTodo(todo);
                            this.setState({
                                inEdit: false
                            })
                        }

                    }}
                    onKeyUp={
                        ev => {
                            if (ev.keyCode === 13) {
                                todo.value = ev.target.value.trim();
                                editTodo(todo);
                                this.setState({
                                    inEdit: false
                                })
                            }
                            if (ev.keyCode === 27) {
                                editTodo(todo);
                                this.setState({
                                    inEdit: false,
                                    flag: true
                                })
                            }
                            setTimeout(() => {
                                this.setState({
                                    flag: false
                                })
                            }, 1000)
                        }
                    }


                />
            </li>


        )
    }
}
