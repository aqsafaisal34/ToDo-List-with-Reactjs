import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };

 

  return (
    <div className="App">
    <div className="main-div">
      <div className="center-div">
      <br />
        <h1>ToDo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a Item  "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>+</button>
        </form>
        <ul>
          {items.map((itemval, ) => {
            return (
              <div className="todo-list">
              
              <li>{itemval}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;