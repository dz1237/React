import React, { Component } from "react";
import { connect } from "react-redux";
import * as types from './actions/index'
const mapStateToProps = (state) => {
    return {
        connect: state.connect
    }
}
@connect(mapStateToProps, types)
class App extends Component {
    render() {
        let { connect, sub, add } = this.props
        return (
            <div>
                <h1>App组件</h1>
                <hr />
                <p>{connect.count}</p>
                <button onClick={() => { add({ x: 100 }) }}>+</button>
                <button onClick={() => { sub() }}>-</button>
            </div>
        )
    }
}
export default App;