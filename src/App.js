import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import TeamDisplay from "./Components/TeamDisplay"
import Form from "./Components/Form"

function App() {
  const [members, setMembers] = useState([{name: "Liam Edlinger", email: "liamedlinger@gmail.com", role: "sexy beast"}]);

  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputRole, setInputRole] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setMembers([...members, {name: inputName, email: inputEmail, role: inputRole}]);
    setInputEmail("");
    setInputName("");
    setInputRole("");
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
      <Form handleSubmit={handleSubmit} handleChange={handleChange} inputRole={inputRole} inputEmail={inputEmail} inputName={inputName}/>

      <TeamDisplay members={members}/>
    </div>
  );
}

export default App;
