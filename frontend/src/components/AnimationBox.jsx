// In this component, we show the representation of the data structure, and each step the algorithm makes
import { useState, useEffect } from "react";
import "../styles/Animation.css";

function AnimationBox({ dataStructure, steps, stepIndex }) {
  const makeSquare = (number, index) => {
    if (steps.length !== 0) {
      if (
        stepIndex >= 0 && (index === steps[stepIndex].indexA ||
        index === steps[stepIndex].indexB)
      ) {
        return (
          <div className="square selected" key={index}>
            {number}
            <div className="index">{index}</div>
          </div>
        );
      }
    }

    return (
      <div className="square" key={index}>
        {number}
        <div className="index">{index}</div>
      </div>
    );
  };

  return (
    <div className="AnimationBox">
      {dataStructure.map((number, index) => makeSquare(number, index))}
    </div>
  );
}

export default AnimationBox;
