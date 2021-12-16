import React, { Component } from 'react';
import './css/index.css'
import Item from './Item'
import Footer from './Footer'
export default class App extends Component {
    state = {
        todoDatas: [],//用来存储所有的todo
        todoNum: 0,
        view: "all",
        flag: false
    }
    //添加TODO
    addTodo = (e) => {
        let todo = {};
        let { todoDatas, todoNum } = this.state;
        // let items=
        if (e.keyCode !== 13 || e.target.value == "") return;
        todo.id = new Date().getTime();
        todo.value = e.target.value.trim();
        todo.hasCompleted = false;
        todoDatas.push(todo);
        todoNum++;
        this.setState({ todoDatas, todoNum });
        e.target.value = "";
    }
    //删除todo
    delTodo = (todo) => {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (todo.id === value.id) {
                if (!todo.hasCompleted) {
                    todoNum--;
                }
                return false;
            }
            else {
                return true
            }
        })
        this.setState({ todoDatas, todoNum });
    }
    //改变todo状态
    changeHasCompleted = (todo) => {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.map(value => {
            if (todo.id === value.id) {
                value.hasCompleted = !todo.hasCompleted;
                if (value.hasCompleted) {
                    todoNum--;
                }
                else {
                    todoNum++;
                }
            } return value;
        })
        this.setState({ todoDatas, todoNum });
    }
    //双击键入编辑状态
    editTodo = (todo) => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.map(value => {
            if (todo.id === value.id) {
                value.value === todo.value;
            }
            return value;
        })
        this.setState({ todoDatas })
    }
    //过滤
    filterTodo = (view) => {
        this.setState({ view })
    }
    //清除已完成
    clearCompleted = () => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (value.hasCompleted) {
                return false
            }
            return true;
        })
        this.setState({ todoDatas })
    }
    //全选   全不选
    isAll = () => {
        let { flag, todoDatas, todoNum } = this.state;
        flag = !flag;
        todoDatas = todoDatas.map(todo => {
            if (flag) {
                todo.hasCompleted = true;
            } else {
                todo.hasCompleted = false;
            }
            return todo;
        })
        if (flag) {
            todoNum = 0;
        }
        else {
            todoNum = todoDatas.length;
        }
        this.setState({ flag, todoDatas, todoNum })
    }

    render() {
        let { todoDatas, todoNum, view } = this.state;
        let { clearCompleted, isAll, filterTodo, addTodo, delTodo, changeHasCompleted, editTodo } = this;
        let filterTodos = todoDatas.filter((todo) => {
            switch (view) {
                case "all":
                    return true;
                case "active":
                    return !todo.hasCompleted;
                case "completed":
                    return todo.hasCompleted;
            }
        })
        let items = filterTodos.map(todo => {
            return (
                <Item changeHasCompleted={changeHasCompleted}
                    todo={todo} key={todo.id}
                    delTodo={delTodo} editTodo={editTodo}

                />
            )
        })
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>Todos</h1>
                    <input type="text" onKeyUp={addTodo} placeholder="What needs to be done?" className="new-todo" />
                </header>
                <section className="main">
                    <input onChange={isAll} type="checkbox" id="toggle-all" className="toggle-all" />
                    <label htmlFor="toggle-all"></label>
                    <ul className="todo-list">
                        {items}
                    </ul>
                </section>
                <Footer filterTodo={filterTodo}
                    view={view} todoNum={todoNum}
                    clearCompleted={clearCompleted} />
            </section>
        )
    }
}
