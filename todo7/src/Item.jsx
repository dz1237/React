import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let { todo, delTodo } = this.props;

        return (

            <li>
                <div className="view">
                    <input type="checkbox" className="toggle" />
                    <label>
                        {todo.value}
                    </label>
                    <button className="destroy" onClick={() => { delTodo(todo) }}></button>
                </div>
                <input type="text" className="edit" />
            </li>


        )
    }
}
