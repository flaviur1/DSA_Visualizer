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
  const [index, setIndex] = useState(-1);

  const handleStepsUpdate = (newSteps) => {
    setSteps(newSteps);
  };

  console.log(steps);
  useEffect(() => {
    if (steps.length !== 0 && index >= 0) {
      setDataStructure(steps[index].arr);
    }
  }, [steps, index]);

  return (
    <div className="MainView">
      <div className="AnimationBox">
        <AnimationBox
          dataStructure={dataStructure}
          steps={steps}
          stepIndex={index}
        />
      </div>
      <div className="CodeBox">
        <CodeBox />
      </div>
      <div className="StepsBox">
        <StepBox steps={steps} index={index} />
      </div>
      <div className="UserOperationsBox">
        <UserOperationsBox
          dataStructure={dataStructure}
          setDataStructure={setDataStructure}
          currentOperation={currentOperation}
          onStepsReceived={handleStepsUpdate}
          index={index}
          setIndex={setIndex}
          stepArrayLength={steps.length}
        />
      </div>
    </div>
  );
}

export default MainView;
