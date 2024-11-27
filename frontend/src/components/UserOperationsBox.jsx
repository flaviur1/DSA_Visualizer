// In UserOperationsBox we have the buttons and the TextFields necessary for the user to customise their data structure
// We also have the start button, which sends a request to the backend to get the json steps so we can print them.
import { useState, useEffect } from "react";
import axios from "axios";

function UserOperationsBox({
  dataStructure,
  setDataStructure,
  currentOperation,
  onStepsReceived,
}) {
  const [newElement, setNewElement] = useState("");
  const addElem = (arr, elem) => {};

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000//api/alg/${currentOperation}/`,
        {
          array: dataStructure,
        }
      );
      onStepsReceived(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Start Algorithm</button>
      <p>Current Array: {JSON.stringify(dataStructure)}</p>
    </div>
  );
}

export default UserOperationsBox;
