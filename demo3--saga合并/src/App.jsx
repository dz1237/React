import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, sub, addasync, fetchUser } from './actions'
class App extends Component {
    render() {
        let { add, sub, counter, addasync, fetchUser } = this.props
        return (
            <div>
                <h1>App组件</h1>
                <p>{counter.count}</p>
                <button onClick={() => { add() }}>+</button>
                <button onClick={() => { sub() }}>-</button>
                <hr />
                <button onClick={() => { addasync() }}>+</button>
                {/* 点击-->dispatch({type:ADDASYNC})-->去调用watchgaddAsync-->然后发送ADDASYNC到
                reducer进行比对   返回默认的state=0，再去调用gaddAsync这个工作generator函数，延迟两秒去转发同步ADD到
                reducer进行比对   和ADD对应  state+1;  之后进行重新render   显示出来
                 */}
                <hr />
                <button onClick={() => { fetchUser() }}>get user</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
export default connect(mapStateToProps, { add, sub, addasync, fetchUser })(App)
