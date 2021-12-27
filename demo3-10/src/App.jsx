// import React, { Component } from "react";
// import { connect } from 'react-redux'
// import { add, sub } from './actions/index'
// class App extends Component {
//     render() {
//         let { count, dispatch } = this.props
//         return (
//             <div>
//                 <h1>App组件</h1>
//                 <hr />
//                 <p>{count}</p>
//                 <button onClick={() => { dispatch(add()) }}>+</button>
//                 <button onClick={() => { dispatch(sub()) }}>-</button>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         count: state
//     }
// }
// export default connect(mapStateToProps)(App);
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {add,sub} from './actions/index'
class App extends Component{

    render(){
        let {count ,dispatch}=this.props
        return (
            <div>
                <h1>App组件</h1>
                <hr/>
                <p>{count}</p>
                <button onClick={() => { dispatch(add()) }}>+</button>
                <button onClick={() => { dispatch(sub()) }}>-</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        count:state
    }
}
export default  connect (mapStateToProps)(App)