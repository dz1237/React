import React, { Component } from 'react'
import Item from './Item';
import Footer from './Footer';
import './css/index.css'
export default class App extends Component {
    state = {
        todoDatas: [],
        todoNum: 0,
        view: "all"

    }
    //添加todo
    addTodo = (e) => {
        if (e.keyCode !== 13 || e.target.value == "") return;
        let { todoDatas, todoNum } = this.state;
        let todo = {};
        todo.id = new Date().getTime();
        todo.value = e.target.value.trim();
        todo.hasCompleted = false;
        console.log("todo", todo);
        todoDatas.push(todo);
        todoNum++;
        console.log("todoDatas", todoDatas);
        this.setState({
            todoDatas, todoNum
        });
        e.target.value = ""
    }
    //删除todo
    delTodo = (todo) => {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (todo.id === value.id) {
                if (todo.hasCompleted) {
                    todoNum--;
                }
                return false;
            }
            else {
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
            return true
        })
        this.setState({ todoDatas, todoNum });
    }
    //双击编辑todo
    editTodo = (todo) => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (todo.id === value.id) {
                value.value = todo.value
            } return value

        })
        this.setState({ todoDatas })
    }
    //过滤
    filterTodo = (view) => {
        this.setState({
            view
        })
    }
    //清除所有已完成
    // clearCompleted = () => {
    //     console.log("asdas");
    //     let { todoDatas } = this.state;
    //     todoDatas = todoDatas.filter(value => {
    //         if (value.hasCompleted) {
    //             return false
    //         }
    //         return true
    //     })
    //     this.setState({
    //         todoDatas
    //     })
    // }
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
        let { addTodo, delTodo, isAll,
            changeHasCompleted,
            editTodo, filterTodo, clearCompleted } = this;
        let filtersTodo = todoDatas.filter(todo => {
            switch (view) {
                case "all": return true;
                case "active": return !todo.hasCompleted;
                case "completed": return todo.hasCompleted;
            }
        }
        )


        let items = filtersTodo.map(todo => {
            return (
                <Item todo={todo} key={todo.id}
                    delTodo={delTodo}
                    changeHasCompleted={changeHasCompleted}
                    editTodo={editTodo}

                />
            )
        })

        return (
            <section className="todoapp">
                <header className="header">
                    <h1>Todo</h1>
                    <input type="text"
                        placeholder='What needs to be done?'
                        className='new-todo' onKeyUp={addTodo} />
                </header>
                <section className="main">
                    <input type="checkbox" onChange={isAll}
                        id="toggle-all" className='toggle-all'
                    />
                    <label htmlFor="toggle-all"></label>
                    <ul className="todo-list">
                        {items}
                    </ul>
                </section>
                <Footer todoNum={todoNum}
                    filterTodo={filterTodo}
                    view={view}
                    clearCompleted={clearCompleted}

                />
            </section>
        )
    }
}
