import React, { Component } from 'react'
import './css/index.css'
import Item from './Item'
import Footer from './Footer'
export default class App extends Component {
    state = {
        todoDatas: [],
    }
    //添加todo
    addTodo = (e) => {
        if (e.keyCode !== 13 || e.target.value == "") return;
        let { todoDatas } = this.state;
        let todo = {};
        todo.id = new Date().getTime();
        todo.value = e.target.value.trim();
        todo.hasCompleted = false;
        todoDatas.push(todo)
        this.setState({ todoDatas });
        e.target.value = ""

    }
    // 删除todo
    delTodo = (todo) => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (todo.id === value.id) {
                return false;
            }

            return true;

        })
        this.setState({ todoDatas });
    }


    render() {
        let { todoDatas } = this.state;
        let { addTodo, delTodo } = this;
        let items = todoDatas.map(todo => {
            return (
                <Item todo={todo} key={todo.id} delTodo={delTodo} />
            )
        })
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>Todo</h1>
                    <input type="text"
                        placeholder='What needs to be done ?'
                        className='new-todo' onKeyUp={addTodo} />
                </header>
                <section className="main">
                    <input type="checkbox"
                        className='toggle-all'
                        id='toggle-all'
                    />
                    <label htmlFor='toggle-all'></label>
                    <ul className="todo-list">
                        {
                            items
                        }
                    </ul>
                </section>
                <Footer />
            </section>
        )
    }
}
