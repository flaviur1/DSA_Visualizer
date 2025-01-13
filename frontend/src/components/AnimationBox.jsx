// In this component, we show the representation of the data structure, and each step the algorithm makes
import { useState, useEffect } from "react";
import "../styles/Animation.css";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";

function AnimationBox({ arrayData, treeData, steps, stepIndex, treeOrNot ,operation}) {
  const makeSquare = (number, index) => {
    if (steps.length !== 0 && stepIndex >= 0) {
      const currentStep = steps[stepIndex];

      if (index === currentStep.indexA || index === currentStep.indexB) {
        let className = "square selected";

        if (currentStep.animType === "check") {
          className += " comparing";
        } else if (currentStep.animType === "switch") {
          className +=
            index === currentStep.indexA ? " swapping-left" : " swapping-right";
        }

        return (
          <div className={className} key={index}>
            {number}
            <div className="index">{index}</div>
          </div>
        );
      }
    }

    let className = "square";
    if (operation === "queue") {
      if (index === arrayData.length - 1) {
        className += " enqueuing";
      }
      if (index === 0) {
        className += " dequeuing";
      }
    }

    return (
      <div className={className} key={index}>
        {number}
        <div className="index">{index}</div>
      </div>
    );
  };

  const makeCircle = (number, index) => {
    if (steps.length !== 0 && stepIndex >= 0) {
      const currentStep = steps[stepIndex];

      if (index === currentStep.indexA || index === currentStep.indexB) {
        let className = "circle selected";

        return (
          <div className={className} key={index}>
            {number}
            <div className="index">{index}</div>
          </div>
        );
      }
    }

    return (
      <div className="circle" key={index}>
        {number}
        <div className="index">{index}</div>
      </div>
    );
  };

  return (
    <div className="AnimationBox">
      {treeOrNot
        ? treeData.map((number, index) => makeCircle(number, index, stepIndex))
        : arrayData.map((number, index) =>
            makeSquare(number, index, stepIndex)
          )}
    </div>
  );
}

export default AnimationBox;
