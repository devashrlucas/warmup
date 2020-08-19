import React, { useState, useEffect } from 'react';
import InputForm from './InputForm'
import Calculations from '../Services/Calculations';
import List from './List';


function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedUserInput, setSubmittedUserInput] = useState({
    start: 0,
    end: 0,
  });
  const [warmupWeights, setWarmupWeights] = useState([]);
  
  return (
    <div>
      <InputForm
        setIsSubmitted={setIsSubmitted}
        setSubmittedUserInput={setSubmittedUserInput}
      />
      <List warmupWeights={warmupWeights}/>
      <Calculations
        submittedUserInput={submittedUserInput}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        setWarmupWeights={setWarmupWeights}
        warmupWeights={warmupWeights}
      />
    </div>
  );
  
}

export default App;
