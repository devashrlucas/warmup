import React, {useState} from 'react';
import InputForm from './InputForm'


function App() {
   const [userInput, setUserInput] = useState({
        start: 0,
        end: 0,
    });

  const [roundedWeights, setRoundedWeights] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    working: ""
  })


  return (
    <div>
      <InputForm setUserInput={setUserInput} userInput={userInput} />
    </div>
  );
}

export default App;
