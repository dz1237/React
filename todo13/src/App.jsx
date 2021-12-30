import React, { Component } from 'react'
import Item from './Item'
import Footer from './Footer'
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
        todo.hasCompleted = false
        todoDatas.push(todo);
        todoNum++
        this.setState({ todoDatas, todoNum })
        e.target.value = ""
    }
    //删除todo
    delTodo = (todo) => {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (value.id === todo.id) {
                if (!todo.hasCompleted) {
                    todoNum--
                }
                return false
            }
            return value
        })
        this.setState({
            todoDatas, todoNum
        })
    }
    //改变todo状态
    changeHasCompleted = (todo) => {
        console.log("asd")
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (value.id === todo.id) {
                todo.hasCompleted = !todo.hasCompleted
                if (todo.hasCompleted) {
                    todoNum--
                }
                else {
                    todoNum++
                }
            }
            return value
        })
        this.setState({
            todoDatas, todoNum
        })
    }
    //双击编辑todo
    editTodo = (todo) => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.map(value => {
            if (value.id === todo.id) {
                value.value = todo.value
            }
            return value;
        })
        this.setState({
            todoDatas
        })
    }
    //遍历todo
    filterTodo = (view) => {
        this.setState({
            view
        })
    }
    //清除所有已完成
    clearCompleted = () => {
        let { todoDatas } = this.state
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
                todo.hasCompleted = true
            } else {
                todo.hasCompleted = false
            }
            return todo
        })

        if (flag) {
            todoNum = 0
        } else {
            todoNum = todoDatas.length
        }
        this.setState({
            todoNum, todoDatas, flag
        })

    }
    // isAll = () => {
    //     let { todoDatas, todoNum, flag } = this.state;
    //     flag = !flag;
    //     todoDatas = todoDatas.map(todo => {
    //         if (flag) {
    //             todo.hasCompleted = true
    //         }
    //         else {
    //             todo.hasCompleted = false
    //         }
    //         return todo
    //     })
    //     if (flag) {
    //         todoNum = 0
    //     } else {
    //         todoNum = todoDatas.length
    //     }
    //     this.setState({
    //         todoDatas, todoNum, flag
    //     })
    // }
    render() {
        let { todoDatas, todoNum, view } = this.state
        let filterTodos = todoDatas.filter(todo => {
            switch (view) {
                case "all":
                    return true;
                case "active":
                    return !todo.hasCompleted
                case "completed":
                    return todo.hasCompleted
            }
        })
        let items = filterTodos.map((todo, index) => {
            return (
                <Item todo={todo} key={index}
                    {...this} />
            )
        })
        return (

            <section section className="todoapp" >
                <header className="header">
                    <h1>Todos</h1>
                    <input type="text" className="new-todo" placeholder='What needs to be done?' onKeyUp={this.addTodo} />
                </header>
                <section className="main" >
                    <input type="checkbox" className="toggle-all " onChange={this.isAll} id='toggle-all' />
                    <label htmlFor="toggle-all"  ></label>
                    <ul className="todo-list">
                        {items}
                    </ul>
                </section>
                <Footer todoNum={todoNum}
                    {...this} view={view} />
            </section >
        )
    }
}

