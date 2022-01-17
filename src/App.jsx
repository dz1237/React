import React, { useState } from "react"
const App = () => {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("tom")

  console.log("render")
  // state = {
  //   count: 0
  // }
  return (
    <div>
      <p>
        {count}
      </p>
      <button onClick={() => setCount(count + 1)}>+</button>
      单击调用匿名函数，count的值变成1，整个函数重新调用，然后将它刷出来
      <hr />
      <p>{name}</p>
      <button onClick={() => setName("jarray")}>change  tom</button>
    </div>
  )
}
export default App;
