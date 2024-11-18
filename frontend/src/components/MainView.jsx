// In this component we combine the TextBox, UserOperationsBox, CodeBox and AnimationBox components

import { useState, useEffect } from "react";
import TextBox from "./TextBox";
import UserOperationsBox from "./UserOperationsBox";

function MainView({ currentOperation }) {
  const [steps, setSteps] = useState([]);
  const [dataStructure, setDataStructure] = useState([2, 5, 4, 3, 2, 1]);

  const handleStepsUpdate = (newSteps) => {
    setSteps(newSteps);
  };

  console.log(steps);

  return (
    <div>
      <p>This is the main view!</p>
      <UserOperationsBox
        dataStructure={dataStructure}
        setDataStructure={setDataStructure}
        currentOperation={currentOperation}
        onStepsReceived={handleStepsUpdate}
      />
    </div>
  );
}

export default MainView;
