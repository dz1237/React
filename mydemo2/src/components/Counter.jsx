
import PropTypes from 'prop-types'
const Counter = (props) => {
    // console.log("Counterpage", props)
    let { counter, dispatch } = props
    return (
        < div >
            <h3>Counter组件</h3>
            <p>{counter.count}</p>
            <button onClick={() => dispatch({ type: 'counter/add' })}>+</button>
            <button onClick={() => dispatch({ type: 'counter/sub' })}>-</button>
        </ div>
    )
}
// 写法一
// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter
//     }
// }
// export default connect(mapStateToProps)(Counter);



// 写法二
export default Counter;
Counter.PropTypes = {
    counter: PropTypes.object
}