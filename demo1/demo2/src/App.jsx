import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, sub } from './actions'
class App extends Component {
    render() {
        let { add, sub, counter } = this.props
        return (
            <div>
                <h1>App组件</h1>
                <p>{counter.count}</p>
                <button onClick={() => { add() }}>+</button>
                <button onClick={() => { sub() }}>-</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
export default connect(mapStateToProps, { add, sub })(App)
