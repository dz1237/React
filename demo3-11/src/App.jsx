import React, { Component } from 'react'
import { sub, add } from './actions/index'
import { connect } from 'react-redux'
class App extends Component {
    render() {
        let { count, dispatch } = this.props
        return (
            <div>
                <h1>App组件</h1>
                <hr />
                <p>{count}</p>
                <button onClick={() => { dispatch(add()) }}>+</button>
                <button onClick={() => { dispatch(sub()) }}>-</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        count: state
    }
}
export default connect(mapStateToProps)(App)
