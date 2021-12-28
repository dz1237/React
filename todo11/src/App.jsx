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
    addTodo = (e) => {
        if (e.keyCode !== 13 || e.target.value == "") return
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
            if (value.id === todo.id) {
                if (!todo.hasCompleted) (
                    todoNum--
                )
                return false
            }
            return true
        })
        this.setState({
            todoDatas, todoNum
        })
    }
    //改变todo状态
    chengeHasCompleted = (todo) => {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.map(value => {
            if (value.id === todo.id) {
                todo.hasCompleted = !todo.hasCompleted
                if (todo.hasCompleted) (
                    todoNum--
                )
                else {
                    todoNum++
                }
            }
            return value;
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
    //过滤todo
    filterTodo = (view) => {
        this.setState({ view })
    }
    //清除所有已经完成的todo
    clearCompleted = () => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (value.hasCompleted) {
                return false
            }
            return true
        })
        this.setState({
            todoDatas
        })
    }
    //选
    // isAll = () => {
    //     console.log("asdasd")
    //     let { todoDatas, todoNum, flag } = this.state;
    //     flag = !flag;
    //     todoDatas = todoDatas.map(todo => {
    //         if (flag) {
    //             todo.hasCompleted = true
    //         }
    //         else {
    //             todo.hasCompleted = false
    //         }
    //     })
    //     if (flag) {
    //         todoNum = 0
    //     }
    //     else {
    //         todoNum = todoDatas.length
    //     }
    //     this.setState({ todoDatas, todoNum, flag })
    // }
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
        let { todoDatas, todoNum, view, } = this.state

        let filterTodos = todoDatas.filter(todo => {
            switch (view) {
                case "all":
                    return true;
                case "active":
                    return !todo.hasCompleted;
                case "completed":
                    return todo.hasCompleted
            }
        })
        let items = filterTodos.map((todo, index) => {
            return (
                <Item todo={todo} key={index}
                    {...this}
                />
            )
        })
        return (
            <section className="todoapp" >
                <header className="header">
                    <h1>Todos</h1>
                    <input type="text" className="new-todo" onKeyUp={this.addTodo} />
                </header>
                <section className="main" >
                    <input type="checkbox" className="toggle-all " id='toggle-all' onChange={this.isAll} />
                    <label htmlFor="toggle-all" ></label>
                    <ul className="todo-list">
                        {items}
                    </ul>
                </section>
                <Footer todoNum={todoNum} view={view}
                    {...this} />
            </section>

        )
    }
}
