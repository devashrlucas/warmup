import React, { useEffect } from "react";

function Calculations(props) {
  const calculateWeights = () => {
    const weights = [];
    const weightIncrease =
      Number(props.submittedUserInput.end - props.submittedUserInput.start) / 4;
    const insertWeight = Number(props.submittedUserInput.start); 
    let temporaryIncrease = 0;
    let i;

    for (i = 0; i < 4; i += 1) {
      temporaryIncrease += weightIncrease;
      weights.push(temporaryIncrease);
    }
    weights.unshift(insertWeight);
    return weights;
  };

  const weights = calculateWeights();

  const calculateRoundedWeights = () => {
    const rounded = [];
    let temporaryRounded;
    let i;

    for (i = 0; i < weights.length; i += 1) {
      temporaryRounded = Math.floor(weights[i] / 5) * 5;
      rounded.push(temporaryRounded);
    }
    return rounded;
  };
  const rounded = calculateRoundedWeights();

  const calculateWarmupWeights = () => {
    const total = [];
    let temp;
    let i;
    for (i = 0; i < weights.length; i += 1) {
      temp =
        Math.ceil(
          (Number(rounded[i]) + Number(props.submittedUserInput.start)) / 5
        ) * 5;
      total.push(temp);
    }
    total[0] = rounded[0];
    return total;
  };

  const totalWeight = calculateWarmupWeights();

  useEffect(() => {
    if (props.isSubmitted === true) {
      //Stops setwarmupWeights from updating state in an infinite loop when empty
      props.setWarmupWeights(Object.values(totalWeight));
      props.setIsSubmitted(false);
    }
  });

  const calculateOneSide = () => {
    const oneSide = [];
    let temporaryOneSide;
    let i;

    for (i = 0; i < totalWeight.length; i += 1) {
      if (totalWeight[i] === 45) {
        temporaryOneSide = 0;
        oneSide.push(temporaryOneSide);
      } else {
        temporaryOneSide = (totalWeight[i] - 45) / 2;
        oneSide.push(temporaryOneSide);
      }
    }
    return oneSide;
  };

  const oneSide = calculateOneSide();

  const calculatePlateRemainder = (weight, plate) => {
    const newRemainder = weight / plate;
    const seperatedRemainder = [Math.floor(newRemainder), weight % plate];
    return seperatedRemainder;
  };

  const calculateEachSet = (x) => {
    let temporaryArray = [];
    let filteredArray = [];
    let formattedArray = [];
    let i;

    const remainder45 = calculatePlateRemainder(x, 45.0);
    const remainder25 = calculatePlateRemainder(remainder45[1], 25.0);
    const remainder10 = calculatePlateRemainder(remainder25[1], 10.0);
    const remainder5 = calculatePlateRemainder(remainder10[1], 5.0);
    const remainder2p5 = calculatePlateRemainder(remainder5[1], 2.5);
    for (i = 0; i < remainder45[0]; i += 1) {
      if (remainder45[0] !== 0) {
        temporaryArray.push(45);
      }
    }
    for (i = 0; i < remainder25[0]; i += 1) {
      if (remainder25[0] !== 0) {
        temporaryArray.push(25);
      }
    }
    for (i = 0; i < remainder10[0]; i += 1) {
      if (remainder10[0] !== 0) {
        temporaryArray.push(10);
      }
    }
    for (i = 0; i < remainder5[0]; i += 1) {
      if (remainder5[0] !== 0) {
        temporaryArray.push(5);
      }
    }
    for (i = 0; i < remainder2p5[0]; i += 1) {
      if (remainder2p5[0] !== 0) {
        temporaryArray.push(2.5);
      }
    }
    // eslint-disable-next-line func-names
    filteredArray = temporaryArray.filter((f) => f !== "");
    formattedArray = filteredArray.join(", ");

    return formattedArray;
  };

  const calculatePlatesPerSet = () => {
    const platesPerSet = [];
    let i;
    for (i = 0; i < oneSide.length; i += 1) {
      platesPerSet.push(calculateEachSet(oneSide[i]));
    }
    return platesPerSet;
  };
  const platesPerSet = calculatePlatesPerSet();

  useEffect(() => {
    if (props.isSubmitted === true) { //Stops setwarmupPlates from updating state in an infinite loop when empty
      props.setwarmupPlates(Object.values(platesPerSet));
      props.setIsSubmitted(false);
    }
  });

  return <div></div>;
}

export default Calculations;
