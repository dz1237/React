import React, { Component } from "react";
import { connect } from 'react-redux'

import { add, sub } from './actions/index'

class App extends Component {
    render() {
        let { counter, dispatch } = this.props
        return (
            <div>
                <h1>App组件</h1>
                <hr />
                <div>counter.state获取到的是count:0
                    只有counter.count才获取到的是0</div>
                <p>{counter.count}

                </p>
                <button onClick={() => { dispatch(add()) }}>+</button>
                <button onClick={() => { dispatch(sub()) }}>-</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // 这时候后的state是这个样子
    // {counter：{count：0}，user："tom"}
    console.log("state", state);
    return {
        // counter: state
        counter: state.counter
    }
}
export default connect(mapStateToProps)(App);