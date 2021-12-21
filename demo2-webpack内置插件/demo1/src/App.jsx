import Child from "./Child";
const App = () => {
    let obj = { name: "tom", age: 19, sex: "男", delTodo: function () { } }
    return (
        <div>
            <h1>
                App组件
            </h1>
            <hr />
            <Child  {...obj} name="jarray" />
        </div>
    )
}
export default App;
