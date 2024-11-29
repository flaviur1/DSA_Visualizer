// In this component we combine the TextBox, UserOperationsBox, CodeBox and AnimationBox components

import { useState, useEffect } from "react";
import AnimationBox from "./AnimationBox";
import CodeBox from "./CodeBox";
import StepBox from "./StepBox";
import UserOperationsBox from "./UserOperationsBox";
import "../styles/MainView.css";

function MainView({ currentOperation }) {
  const [steps, setSteps] = useState([]);
  const [dataStructure, setDataStructure] = useState([2, 5, 4, 3, 2, 1]);

  const handleStepsUpdate = (newSteps) => {
    setSteps(newSteps);
  };

  console.log(steps);

  return (
    <div class="grid-container">
      <div className="Animation">
        <AnimationBox />
      </div>
      <div className="Code">
        <CodeBox />
      </div>
      <div className="Steps">
        <StepBox steps={steps} />
      </div>
      <div className="UserOperations">
        <UserOperationsBox
          dataStructure={dataStructure}
          setDataStructure={setDataStructure}
          currentOperation={currentOperation}
          onStepsReceived={handleStepsUpdate}
        />
      </div>
    </div>
  );
}

export default MainView;
