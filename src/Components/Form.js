import React from 'react';
import { useState } from 'react';

function Form(props) {
    return (
        <form onSubmit={event => props.handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="addName"
            value={props.inputName}
            onChange={event => props.handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="addEmail"
            value={props.inputEmail}
            onChange={event => props.handleChange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="addRole"
            value={props.inputRole}
            onChange={event => props.handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    );
}

export default Form;
