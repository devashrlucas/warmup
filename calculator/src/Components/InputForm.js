import React, { useState } from 'react';

function InputForm(props) {
    
    const handleChange = (e) => {
        const value = e.target.value;
        props.setUserInput({
            ...props.userInput, [e.target.name]: value //computed property and object literal notation
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Starting Weight (lbs)
            <input
              type="text"
              name="start"
              value={props.userInput.start}
              onChange={handleChange}
            />
          </label>
          <label>
            Ending Weight (lbs)
            <input
              type="text"
              name="end"
              value={props.userInput.end}
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
}

export default InputForm;