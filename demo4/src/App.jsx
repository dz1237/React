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
                <p>{counter}</p>
                <button onClick={() => { dispatch(add()) }}>+</button>
                <button onClick={() => { dispatch(sub()) }}>-</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // counter: state
        counter: state.count//大于五才会显示
    }
}
export default connect(mapStateToProps)(App);