import React, { useState } from 'react';
import InputForm from './InputForm'
import Calculations from '../Services/Calculations';


function App() {
 
  const [isSubmitted, setIsSubmitted] = useState(false);
   const [submittedUserInput, setSubmittedUserInput] = useState({
     start: 0,
     end: 0,
   });
  const [warmupWeights, setWarmupWeights] = useState({});

  return (
    <div>
      <InputForm
        setIsSubmitted={setIsSubmitted}
        setSubmittedUserInput={setSubmittedUserInput}
      />
      <Calculations
        submittedUserInput={submittedUserInput}
        isSubmitted={isSubmitted}
        setWarmupWeights={setWarmupWeights}
      />
    </div>
  );
  
}

export default App;
