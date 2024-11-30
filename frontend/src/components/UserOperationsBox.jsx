// In UserOperationsBox we have the buttons and the TextFields necessary for the user to customise their data structure
// We also have the start button, which sends a request to the backend to get the json steps so we can print them.
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import "../styles/UserOperations.css";

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
    if (isNaN(parseInt(newElement))) {
      alert("Please insert an integer only");
      return;
    }
    setDataStructure([...dataStructure, parseInt(newElement)]);
    setNewElement("");
  };

  const handleDelete = async () => {
    if (newElement === "") {
      alert("Please insert the element first");
      return;
    }
    if (isNaN(parseInt(newElement))) {
      alert("Please insert an integer only");
      return;
    }
  };

  const handleClear = async () => {
    setDataStructure([]);
  };

  return (
    <div className="UserOperationsBox">
      <TextField
        id="filled-basic"
        label="Insert"
        variant="filled"
        value={newElement}
        onChange={(e) => {
          setNewElement(e.target.value);
        }}
        className="text-field"
      />

      <button className="button insert" onClick={handleInsert}>
        Insert
      </button>

      <button className="button delete" onClick={handleDelete}>
        Delete
      </button>

      <button className="button clear" onClick={handleClear}>
        Clear
      </button>

      <button className="button start" onClick={handleSubmit}>
        Start Algorithm
      </button>

      <button className="big-button previous" onClick={handleSubmit}>
        Previous Step
      </button>

      <button className="big-button next" onClick={handleSubmit}>
        Next Step
      </button>
    </div>
  );
}

export default UserOperationsBox;
