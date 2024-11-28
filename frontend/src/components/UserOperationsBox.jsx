// In UserOperationsBox we have the buttons and the TextFields necessary for the user to customise their data structure
// We also have the start button, which sends a request to the backend to get the json steps so we can print them.
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";

function UserOperationsBox({
  dataStructure,
  setDataStructure,
  currentOperation,
  onStepsReceived,
}) {
  const [newElement, setNewElement] = useState("");

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

  const handleInsert = async () => {
    if (newElement === "") {
      alert("Please insert the element first");
      return;
    }
    if(parseInt(newElement) === null){
      alert("Please insert an integer only");
      return;
    }
    setDataStructure([...dataStructure, parseInt(newElement)]);
    setNewElement("");
  };

  return (
    <div>
      <button onClick={handleSubmit}>Start Algorithm</button>
      <TextField
        id="standard-basic"
        label="Insert"
        variant="standard"
        value={newElement}
        onChange={(e) => {
          setNewElement(e.target.value);
        }}
      />
      <button onClick={handleInsert}>Submit</button>
      <p>Current Array: {JSON.stringify(dataStructure)}</p>
    </div>
  );
}

export default UserOperationsBox;
