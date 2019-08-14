import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TeamDisplay from "./Components/TeamDisplay"

function App() {
  const [members, setMembers] = useState([{name: "Liam Edlinger", email: "liamedlinger@gmail.com", role: "sexy beast"}]);

  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputRole, setInputRole] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputName);
    console.log(inputEmail);
    console.log(inputRole);
    setInputName("");
  }

  const handleChange = (event) => {
    if(event.target.name === "addName"){
      setInputName(event.target.value);
    }
    else if(event.target.name === "addEmail"){
      setInputEmail(event.target.value);
    }
    else{
      setInputRole(event.target.value);
    }
  }

  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="addName"
            value={inputName}
            onChange={handleChange}
          />
        </label>
        <button>Submit!</button>
      </form>

      <TeamDisplay members={members}/>
    </div>
  );
}

export default App;
