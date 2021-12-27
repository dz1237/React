import React, { Component } from "react";
import { connect } from 'react-redux'
import * as types from './actions/index'
import { bindActionCreators } from 'redux'
const mapStateToProps = (state) => {
    // 这时候后的state是这个样子
    // {counter：{count：0}，user："tom"}
    console.log("state", state);
    return {
        // counter: state
        counter: state.counter
    }
}
@connect(mapStateToProps, types)

class App extends Component {
    render() {
        let { counter, sub, add } = this.props
        return (
            <div>
                <h1>App组件</h1>
                <hr />
                <div>counter.state获取到的是count:0
                    只有counter.count才获取到的是0</div>
                <p>{counter.count}

                </p>
                <button onClick={() => { add({ x: 10, y: 300 }) }}>+</button>
                <button onClick={() => { sub() }}>-</button>
            </div >
        )
    }
}

// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         add: (data) => {
// //             dispatch(add(data))
// //         },
// //         sub: (data) => {
// //             dispatch(sub(data))
// //         }
// //     }
// // }简化
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ add, sub }, dispatch);
// }在简化
// export default connect(mapStateToProps, { add, sub })(App);简化
export default App;