
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 const [input, setInput] = useState("");
 const [term, setTerm] = useState("");
 
 cosnt handleChange=(e)=>{
  setInput(e.target.value);
 }
 
 cosnt handleSubmit=(e)=>{
 e.preventDefault();
 setTerm(term+input);
 setInput("")
 }
         

 
  return (
    <div>
  <input id='input' type="text" value={input} onChange={handleChange} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{term} </p>
      <button id='button' onClick={handleSubmit}>
        Click me
      </button>
    </div>
  );
}
