import React, { useState } from "react";

function App() {
const [item, setItem] = useState("")

function handleChange(e){
  const [name, value] = e.target
  setItem((prevChange) =>{

  })
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" placeholder="Enter item" onChange={handleChange} value={item} />
        <button >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{item}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
