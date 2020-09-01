import React, { useState } from "react";

function InputForm(props) {
  const [userInput, setUserInput] = useState({
    start: 0,
    end: 0,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput({
      ...userInput,
      [e.target.name]: value, //computed property and object literal notation
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSubmittedUserInput(userInput);
    props.setIsSubmitted(true);
  };

  return (
    <div>
      <form id="inputForm" onSubmit={handleSubmit}>
        <label>
          Starting Weight (lbs)
          <input
            type="text"
            name="start"
            value={userInput.start}
            onChange={handleChange}
          />
        </label>
        <label>
          Ending Weight (lbs)
          <input
            type="text"
            name="end"
            value={userInput.end}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default InputForm;
