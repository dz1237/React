import React, { Component } from "react";
import Item from './Item'
import Footer from './Footer'
import './css/index.css'
export default class App extends Component {
    state = {
        todoDatas: [],
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
        todoNum++;
        this.setState({
            todoDatas, todoNum
        })
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

                return false
            }
            return true
        })
        this.setState({
            todoDatas, todoNum
        })
    }
    //改变todo状态
    changeHasCompleted = (todo) => {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (todo.id === value.id) {
                todo.hasCompleted = !todo.hasCompleted
                if (todo.hasCompleted) {
                    todoNum--;
                }
                else {
                    todoNum++
                }
            }
            return true
        })
        this.setState({
            todoDatas, todoNum
        })
    }
    //双击进入编辑
    editTodo = (todo) => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (todo.id === value.id) {
                value.value = todo.value
            }
            return value;
        })
        this.setState({
            todoDatas
        })
    }
    //过滤todo
    filterTodo = (view) => {
        this.setState({
            view
        })
    }

    //清除所有已完成
    clearCompleted = () => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.filter(todo => {
            if (todo.hasCompleted) {
                return false
            }
            return true
        })
        this.setState({
            todoDatas
        })
    }
    //全选全不选
    isAll = () => {
        let { todoDatas, todoNum, flag } = this.state
        flag = !flag;
        todoDatas = todoDatas.map(todo => {
            if (flag) {
                todo.hasCompleted = true;
            }
            else {
                todo.hasCompleted = false;
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
            todoDatas, todoNum, flag
        })

    }
    render() {
        let { todoDatas, todoNum, view } = this.state;
        let { addTodo, editTodo, isAll, delTodo, clearCompleted, changeHasCompleted, filterTodo } = this;
        let filterTodos = todoDatas.filter(todo => {
            switch (view) {
                case "all":
                    return true
                case "active":
                    return !todo.hasCompleted;
                case "completed":
                    return todo.hasCompleted
            }
        })
        let items = filterTodos.map(todo => {
            return (
                <Item todo={todo} key={todo.id}
                    delTodo={delTodo}
                    changeHasCompleted={changeHasCompleted}
                    editTodo={editTodo} />
            )
        })
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>Todos</h1>
                    <input type="text" className="new-todo" placeholder="What need to be done?"
                        onKeyUp={addTodo} />
                </header>
                <section className="main">
                    <input type="checkbox" className="toggle-all"
                        id='toggle-all' onChange={isAll} />
                    <label htmlFor='toggle-all'></label>
                    <ul className="todo-list">
                        {items}
                    </ul>
                </section>
                <Footer
                    todoNum={todoNum}
                    view={view}
                    filterTodo={filterTodo}
                    clearCompleted={clearCompleted} />
            </section>
        )
    }
}