// In this component we combine the TextBox, UserOperationsBox, CodeBox and AnimationBox components

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimationBox from "./AnimationBox";
import CodeBox from "./CodeBox";
import StepBox from "./StepBox";
import UserOperationsBox from "./UserOperationsBox";
import "../styles/MainView.css";

function MainView() {
  const [steps, setSteps] = useState([]);
  const [arrayData, setArrayData] = useState([2, 5, 4, 3, 2, 1]);
  const [treeData, setTreeData] = useState([-1, 0, 0, 1, 2]); // We use a father array to represent the tree
  const [index, setIndex] = useState(-1);
  const [treeOrNot, setTreeOrNot] = useState(false);
  const { operation } = useParams();

  const handleStepsUpdate = (newSteps) => {
    setSteps(newSteps);
  };

  console.log(steps);

  useEffect(() => {
    if (steps.length !== 0 && index >= 0) {
      setArrayData(steps[index].arr);
    }
  }, [steps, index]);

  useEffect(() => {
    if (operation !== undefined && operation === "bfs") {
      setTreeOrNot(true);
    } else {
      setTreeOrNot(false);
    }
  }, [operation]);

  console.log(treeOrNot);

  return (
    <div className="MainView">
      <div className="AnimationBox">
        <AnimationBox
          arrayData={arrayData}
          treeData={treeData}
          steps={steps}
          stepIndex={index}
          treeOrNot={treeOrNot}
          operation={operation}
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
          arrayData={arrayData}
          setArrayData={setArrayData}
          treeData={treeData}
          setTreeData={setTreeData}
          currentOperation={operation}
          onStepsReceived={handleStepsUpdate}
          index={index}
          setIndex={setIndex}
          stepArrayLength={steps.length}
          treeOrNot={treeOrNot}
        />
      </div>
    </div>
  );
}

export default MainView;
