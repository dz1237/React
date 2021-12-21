import React, { Component } from 'react';
import './css/index.css'
import Item from './Item'
import Footer from './Footer'
export default class App extends Component {
    state = {
        todoDatas: [],//存储所有的todo
        todoNum: 0,
        view: "all",//过滤状态
        flag: false//全选   全不选

    }
    //添加数据
    addTodo = (e) => {
        //如果按键不是回车，那么就什么都不做
        if (e.keyCode !== 13 || e.target.value === "") return;
        // if(e.target.value==="")return;
        //如果文本框的内容是空   就不添加了
        //如果是13 是回车键  那么就执行添加todo
        let { todoDatas, todoNum } = this.state;
        // let todoDatas=this.state.todoDatas  等价
        //生成新的todo
        let todo = {};
        todo.id = new Date().getTime();
        todo.value = e.target.value.trim();
        todo.hasCompleted = false;
        todoDatas.push(todo);
        todoNum++;
        this.setState({ todoDatas, todoNum });
        e.target.value = "";
    }
    //删除
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
    //完成todo  也就是改变todo的状态
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
            }
            return value;
        })
        this.setState({ todoDatas, todoNum })
    }
    //编辑todo
    editTodo = (todo) => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.map(value => {
            if (todo.id === value.id) {
                value.value == todo.value;
            }
            return value;
        })
        this.setState({ todoDatas });
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
            } return true;
        })
        this.setState({ todoDatas })
    }
    //全选全不选
    isAll = () => {
        let { flag, todoDatas, todoNum } = this.state;
        flag = !flag;
        todoDatas = todoDatas.map(todo => {
            if (flag) {
                todo.hasCompleted = true;
            }
            else {
                todo.hasCompleted = false;
            }
            return todo;

        })
        if (flag) {
            todoNum = 0;
        }
        else {
            todoNum = todoDatas.length
        }
        this.setState({ flag, todoDatas, todoNum })
    }
    render() {
        let { todoDatas, todoNum, view, } = this.state;
        let { isAll, clearCompleted, addTodo, delTodo, changeHasCompleted, filterTodo, editTodo } = this;
        let filterTodos = todoDatas.filter((todo) => {
            switch (view) {
                case "all":
                    return true;
                case 'active':
                    return !todo.hasCompleted;
                case 'completed':
                    return todo.hasCompleted;
            }
        })
        let items = filterTodos.map(todo => {
            return (
                <Item todo={todo} key={todo.id} delTodo={delTodo}
                    changeHasCompleted={changeHasCompleted}
                    editTodo={editTodo}

                />
            )
        })
        return (

            <section className="todoapp">
                <header className="header">
                    <h1>Todos</h1>
                    <input onKeyUp={addTodo} type="text" className="new-todo" placeholder="What needs to be done?" />
                </header>
                <section className="main">
                    <input onChange={isAll} type="checkbox" id="toggle-all" className="toggle-all" />
                    <label htmlFor="toggle-all"></label>
                    <ul className="todo-list">
                        {
                            items
                        }

                    </ul>
                </section>
                <Footer todoNum={todoNum} filterTodo={filterTodo} view={view} clearCompleted={clearCompleted} />
            </section>

        )

    }
}