// In this component, we print the explications for the steps, in sync with the animation
import { useState, useEffect } from "react";

function StepBox({ steps, nextStep, setNextStep }) {
  const stringSteps = JSON.stringify(steps);
  const shownSteps = "";

  const handleNext = () =>{
    if (nextStep === true){
        shownSteps.concat()
    }
  }

  return <div>{stringSteps}</div>;
}

export default StepBox;
