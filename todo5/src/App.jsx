import React, { Component } from 'react';
import './css/index.css'
import Item from './Item';
import Footer from './Footer';

export default class App extends Component {
    state = {
        todoDatas: [],//新建todoDatas存储
        todoNum: 0,
        view: "all",
        flag: false
    }
    //添加todo
    addTodo = (e) => {
        if (e.keyCode !== 13 || e.target.value == "") return;
        let { todoDatas, todoNum } = this.state;
        let todo = {};
        todo.id = new Date().getTime();
        todo.value = e.target.value.trim();
        todo.hasCompleted = false;
        todoDatas.push(todo);
        todoNum++
        this.setState({ todoDatas, todoNum });
        e.target.value = "";
    }
    //删除todo
    delTodo = (todo) => {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (todo.id === value.id) {
                if (todo.id === value.id) {
                    todoNum--;
                }

                return false;
            } else {
                return true
            }
        })
        this.setState({ todoDatas, todoNum })
    }
    //改变todo状态
    changeHasCompleted = (todo) => {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (todo.id === value.id) {
                value.hasCompleted = !value.hasCompleted
                if (value.hasCompleted) {
                    todoNum--;
                }
                else {
                    todoNum++
                }
            }
            return value
        })
        this.setState({ todoDatas, todoNum })
    }
    //双击进入编辑状态
    editTodo = (todo) => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (todo.id === value.id) {
                value.value = todo.value
            }
            return value
        })
        this.setState({ todoDatas });
    }
    //过滤
    filterTodo = (view) => {
        this.setState({ view })
    }
    //清除所有已完成
    clearCompleted = () => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (value.hasCompleted) {
                return false
            }
            return true
        })
        this.setState({ todoDatas })
    }
    //全选全不选
    isAll = () => {
        let { todoDatas, flag, todoNum } = this.state;
        flag = !flag;
        todoDatas = todoDatas.map(todo => {
            if (flag) {
                todo.hasCompleted = true
            }
            else {
                todo.hasCompleted = false
            }
            return todo
        })
        if (flag) {
            todoNum = 0;
        }
        else {
            todoNum = todoDatas.length;
        }
        this.setState({
            flag, todoDatas, todoNum
        })
    }

    render() {
        let { todoDatas, todoNum, view } = this.state;
        let { isAll, clearCompleted, addTodo, delTodo, filterTodo, changeHasCompleted, editTodo } = this;
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
                <Item todo={todo} key={todo.id}
                    delTodo={delTodo}
                    changeHasCompleted={changeHasCompleted}
                    editTodo={editTodo}
                    todoNum={todoNum}
                />
            )
        })
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>Todo</h1>
                    <input placeholder="What needs to be done?" type="text" onKeyUp={addTodo} className="new-todo" />
                </header>
                <section className="main">
                    <input onChange={isAll} type="checkbox" id="toggle-all" className="toggle-all" />
                    <label htmlFor="toggle-all"></label>
                    <ul className="todo-list">
                        {items}

                    </ul>
                </section>
                <Footer todoNum={todoNum}
                    view={view}
                    filterTodo={filterTodo}
                    clearCompleted={clearCompleted}
                />
            </section>
        )
    }
}