import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const Index2 = () => {
const [count, setCount] = useState(0)
const [todos, setTodos] = useState([])
const increment  =  () => {

setCount((c) => c + 1)

}
const  addTodo = useCallback(() => {

setTodos((t) => [...t, "new to do"])

}, [todos])
return (
<>
<hr/>
<div>

  cCount: {count}
  <button onClick={increment}>+</button>
</div>


</>
)




}
export default Index2


