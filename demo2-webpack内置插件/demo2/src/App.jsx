import Child from "./Child";
const App = () => {
    let obj = { name: "tom", age: 19, sex: "男" }
    return (
        <div>
            <h1>
                App组件
            </h1>
            <hr />
            <h2>
                <Child  {...obj} name="jarray" />
            </h2>
        </div>
    )
}
export default App;