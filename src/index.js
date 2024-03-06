import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE: Make this app work by applying what you've learnt.
//1. Create a state variable to store the input text.
//2. Set up an event handler to update the state variable when new text is written into the input.
//3. Create a state variable to store the array of items.
//4. Set up an event handler for the add button to add the current input text to the array.
//5. Render the array items as <li> elements inside the <ul> element.

// Step 1: Create a state variable to store the input text
const [inputText, setInputText] = React.useState("");

// Step 2: Set up an event handler to update the state variable when new text is written into the input
const handleChange = (event) => {
    setInputText(event.target.value);
};

// Step 3: Create a state variable to store the array of items
const [items, setItems] = React.useState([]);

// Step 4: Set up an event handler for the add button to add the current input text to the array
const handleClick = () => {
    setItems((prevItems) => [...prevItems, inputText]);
    setInputText(""); // Clear the input text after adding it to the array
};

// Step 5: Render the array items as <li> elements inside the <ul> element
<ul>
    {items.map((item, index) => (
        <li key={index}>{item}</li>
    ))}
</ul>
