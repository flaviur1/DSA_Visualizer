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
      alert("Please enter the element in the text field first.");
      return;
    }
    if (isNaN(parseInt(newElement))) {
      alert("Please insert a valid integer.");
      return;
    }
    setDataStructure([...dataStructure, parseInt(newElement)]);
    setNewElement("");
  };

  const handleDelete = async () => {
    if (newElement === "") {
      alert("Please enter the index in the text field first.");
      return;
    }
    if (isNaN(parseInt(newElement))) {
      alert("Please enter an index in the form of a number.");
      return;
    }
    const indexToDelete = parseInt(newElement);
    if (indexToDelete < 0 || indexToDelete > dataStructure.length - 1) {
      alert("Please enter an index that is valid.");
      return;
    }

    const newData = dataStructure.filter(
      (val, index) => index !== indexToDelete
    );
    setDataStructure(newData);
    setNewElement("");
  };

  const handleClear = async () => {
    setDataStructure([]);
  };

  return (
    <div className="UserOperations">
      <TextField
        id="filled-basic"
        label="Number"
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

      <button className="big-button previous">Previous Step</button>

      <button className="big-button next">Next Step</button>
    </div>
  );
}

export default UserOperationsBox;
