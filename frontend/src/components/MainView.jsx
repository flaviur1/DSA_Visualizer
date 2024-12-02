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
  const [nextStep, setNextStep] = useState(false);

  const handleStepsUpdate = (newSteps) => {
    setSteps(newSteps);
  };

  console.log(steps);

  return (
    <div className="MainView">
      <div className="AnimationBox">
        <AnimationBox dataStructure={dataStructure} />
      </div>
      <div className="CodeBox">
        <CodeBox />
      </div>
      <div className="StepsBox">
        <StepBox steps={steps} nextStep={nextStep} setNextStep={setNextStep} />
      </div>
      <div className="UserOperationsBox">
        <UserOperationsBox
          dataStructure={dataStructure}
          setDataStructure={setDataStructure}
          currentOperation={currentOperation}
          onStepsReceived={handleStepsUpdate}
          setNextStep={setNextStep}
        />
      </div>
    </div>
  );
}

export default MainView;
