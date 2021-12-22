import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, sub } from './actions/index'
class App extends Component {
    render() {
        console.log("App this.props", this.props)
        let { count, dispatch } = this.props
        return (
            <div>
                <h1>App组件</h1>
                <p>{count}</p>
                <button onClick={() => { dispatch(add()) }}>+</button>
                <button onClick={() => { dispatch(sub()) }}>-</button>



            </div>
        )
    }
}
//找到store中的state添加到当前组件的this.props上
const mapStateToProps = (state, ownProps) => {
    console.log("store中的state", state)
    return {
        count: state
    }
}
export default connect(mapStateToProps)(App);
//只要调用connect()(App),就将store中的dispatch
//添加到this.props、props上

//connect（mapStateToProps）(App)connect自动
//调佣mapStateToProps将dispatch添加到this.props、props上