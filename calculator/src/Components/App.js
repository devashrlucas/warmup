import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import InputForm from "./InputForm";
import Calculations from "../Services/Calculations";
import Table from "./Table";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedUserInput, setSubmittedUserInput] = useState({
    start: 0,
    end: 0,
  });
  const [warmupWeights, setWarmupWeights] = useState([]);
  const [warmupPlates, setWarmupPlates] = useState([]);

  const breakpoints = {
    phone:,
    desktop:,
    tablet:,
  }

  return (
    <div>
      <InputForm
        setIsSubmitted={setIsSubmitted}
        setSubmittedUserInput={setSubmittedUserInput}
      />
      <Table
        setWarmupPlates={setWarmupPlates}
        warmupPlates={warmupPlates}
        warmupWeights={warmupWeights}
      />
      <Calculations
        submittedUserInput={submittedUserInput}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        setWarmupWeights={setWarmupWeights}
        setwarmupPlates={setWarmupPlates}
        warmupPlates={warmupPlates}
      />
    </div>
  );
}

export default App;
