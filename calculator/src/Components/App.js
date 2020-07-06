import React, { useState, useEffect } from 'react';
import InputForm from './InputForm'


function App() {
   const [userInput, setUserInput] = useState({
      start: 0,
      end: 0,
    });
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
      let temporaryRounded ;
      let i;
      
      for (i = 0; i < weights.length; i+= 1) {
        temporaryRounded = Math.ceil((weights[i] / 5)) * 5;
        rounded.push(temporaryRounded);
      }
      return rounded
    }
    const rounded = calculateRoundedWeights(); 
    console.log(rounded)
    
    //setRoundedWeights(([...roundedWeights, rounded]: roundedWeights));
  
  


  return (
    <div>
      <InputForm setUserInput={setUserInput} userInput={userInput} />
    </div>
  );
  
}

export default App;
