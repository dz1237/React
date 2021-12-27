import React, { Component } from "react";
import { connect } from 'react-redux'
import * as types from './actions/index'
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
@connect(mapStateToProps, types)
class App extends Component {
    render() {
        let { counter, sub, add } = this.props
        return (
            <div>
                <h1>
                    App组件
                </h1>
                <hr />
                <p>{counter.count}</p>
                <button onClick={() => { add({ x: 100, y: 200 }) }}>+</button>
                <button onClick={() => { sub() }}>-</button>
            </div>
        )
    }
}
export default App;