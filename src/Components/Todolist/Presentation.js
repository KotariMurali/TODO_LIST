import React from "react";
import '../../styles/todoList.css'
import { TiDelete } from "react-icons/ti";
const Presentation = (props) => {
  const { input, todos, Addtodo,handleTodos,handleInput,DeleteTodo } = props;
  return (
    <div>
      <div className="App">
        <form id="to-do-form">
          <input
            placeholder="enter todo"
            type="text"
            value={input}
            onChange={handleInput}
          />
          <button type="submit" onClick={Addtodo}>
            add
          </button>
        </form>
        {todos.map((todo, index) => (
          <ul className="list" key={todo}>
            {todo}
            <span>
              <TiDelete
                className="TiDelete"
                key={index}
                onClick={() => DeleteTodo(index)}
              />
            </span>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Presentation;
