// In this component, we show the representation of the data structure, and each step the algorithm makes
import { useState, useEffect } from "react";
import "../styles/Animation.css";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";

function AnimationBox({ dataStructure, steps, stepIndex, treeOrNot }) {
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

    return (
      <div className="square" key={index}>
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
        ? dataStructure.map((number, index) =>
            makeCircle(number, index, stepIndex)
          )
        : dataStructure.map((number, index) =>
            makeSquare(number, index, stepIndex)
          )}
    </div>
  );
}

export default AnimationBox;
