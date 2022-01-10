import { connect } from "dva";
import Counter from "../../components/Counter";
const CounterPage = (props) => {
    console.log("props", props)
    return (
        <div>
            <h1>CounterPage</h1>
            <hr />
            <Counter
                {...props}
            // 属性1延展  将对象的属性延展成组件的属性
            // 将对象的属性值，延展成组件的属性值
            />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
export default connect(mapStateToProps)(CounterPage);