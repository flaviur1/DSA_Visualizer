// In this component, we print the explications for the steps, in sync with the animation
import { useState, useEffect } from "react";

function StepBox({ steps, index }) {
  const renderSteps = () => {
    return steps.slice(0, index + 1).map((step, i) => (
      <div key={i}>
        Iteration: {step.iteration} Step: {step.step}
        <p> {step.text}</p>
      </div>
    ));
  };

  return (
    <div>
      <h3>Steps</h3>
      {renderSteps()}
    </div>
  );
}

export default StepBox;