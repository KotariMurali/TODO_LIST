//import logo from './logo.svg';
 import './App.css';
import React, { useState } from 'react'
import { TiDelete } from "react-icons/ti";
//import './styles.css'
function App() {
  const [input, setinput] = useState("")
  const [todos, settodos] = useState([])

  const Addtodo = (e) => {
    settodos([...todos, input])
    setinput("")
    e.preventDefault()
    const key = Date.now
    console.log(key)
  }
 const DeleteTodo=(index)=>{

    const Tododata=todos.filter((todo, i) => index !== i);
   
    settodos(Tododata)
}
  return (
    <div className="App">
      <form id="to-do-form">
        <input placeholder="enter todo" type="text" value={input} onChange={(e) => setinput(e.target.value)} />
        <button type="submit" onClick={Addtodo}>add</button>
      </form>
      {todos.map((todo,index) => (
        <ul className="list" key={todo} >
          {todo}
          <span >
            <TiDelete className="TiDelete" key={index} onClick={() => DeleteTodo(index)} />
          </span>
          {/* <span >
            <TiDelete className="faicons" key={index} onClick={() => CreateTodo(index)} />
          </span> */}
        </ul>
      ))}
    </div>
  )
}

export default App
