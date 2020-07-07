import React, { useState, useEffect } from 'react';
import InputForm from './InputForm'


function App() {
  const [userInput, setUserInput] = useState({
      start: 0,
      end: 0,
    });
  //const [warmupWeights, setWarmupWeights] = useState({})
  const [roundedWeights, setRoundedWeights] = useState([]);

  const calculateWeights = () => {
    const weights = [45];
    const weightIncrease = Number(userInput.end - userInput.start) / 4;
    let temporaryIncrease = 0;
    let i;

    for (i = 0; i < 4; i += 1) {
      temporaryIncrease += weightIncrease;
      weights.push(temporaryIncrease);
    }
    return weights;
  };
    
  const weights = calculateWeights();

  const calculateRoundedWeights = () => {
    const rounded = [];
    let temporaryRounded;
    let i;
    
    for (i = 0; i < weights.length; i+= 1) {
      temporaryRounded = Math.ceil((weights[i] / 5)) * 5;
      rounded.push(temporaryRounded);
    }
    return rounded
  }
  const rounded = calculateRoundedWeights();  

  const calculateOneSide = () => {
    const oneSide = [];
    let temporaryOneSide;
    let i;

    for (i = 0; i < rounded.length; i += 1) {
      if (rounded[i] === 45) {
        temporaryOneSide = 0;
        oneSide.push(temporaryOneSide);
      } else {
        temporaryOneSide = (rounded[i] - 45) / 2;
        oneSide.push(temporaryOneSide);
      }
    }
    return oneSide;
  }

  const oneSide = calculateOneSide();
  console.log(oneSide);
  return (
    <div>
      <InputForm setUserInput={setUserInput} userInput={userInput}/>
    </div>
  );
  
}

export default App;
