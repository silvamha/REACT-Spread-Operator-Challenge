import React, { useState } from "react";

function App() {
const [inputText, setInputText] = useState("")

const handleChange = (e) => {
  const inputValue = e.target.value;
  setInputText(inputValue);
}

const [items, setItems] = useState([])  

const handleClick = () => {
  setItems((prevItems) => {
    return [...prevItems, inputText];
  });

  setInputText("");


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" placeholder="Enter item" value={inputText} />
        <button onCli >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
    {items.map((item, index) => (
        <li 
        key={index}>{item}
        </li>
    ))}
</ul>
      </div>
    </div>
  );
}
}

export default App;
