// In UserOperationsBox we have the buttons and the TextFields necessary for the user to customise their data structure
// We also have the start button, which sends a request to the backend to get the json steps so we can print them.
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import "../styles/UserOperations.css";

function UserOperationsBox({
  arrayData,
  setArrayData,
  treeData,
  setTreeData,
  currentOperation,
  onStepsReceived,
  index,
  setIndex,
  stepArrayLength,
  treeOrNot,
}) {
  const [newElement, setNewElement] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000//api/alg/${currentOperation}/`,
        {
          array: arrayData,
          tree: treeData,
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
    if (treeOrNot) {
      setTreeData([...treeData, parseInt(newElement)]);
    } else {
      setArrayData([...arrayData, parseInt(newElement)]);
    }
    setNewElement("");
  };

  const handleDelete = async () => {
    if (currentOperation === "queue") {
      if (arrayData.length === 0) {
        alert("Queue is empty!");
        return;
      }
      const newData = arrayData.slice(1);
      setArrayData(newData);
      return;
    }

    if (newElement === "") {
      alert("Please enter the index in the text field first.");
      return;
    }
    if (isNaN(parseInt(newElement))) {
      alert("Please enter an index in the form of a number.");
      return;
    }
    const indexToDelete = parseInt(newElement);
    if (treeOrNot) {
      if (indexToDelete < 0 || indexToDelete > treeData.length - 1) {
        alert("Please enter an index that is valid.");
        return;
      }
    } else {
      if (indexToDelete < 0 || indexToDelete > arrayData.length - 1) {
        alert("Please enter an index that is valid.");
        return;
      }
    }
    if (treeOrNot) {
      const newData = treeData.filter((val, index) => index !== indexToDelete);
      setTreeData(newData);
    } else {
      const newData = arrayData.filter((val, index) => index !== indexToDelete);
      setArrayData(newData);
    }
    setNewElement("");
  };

  const handleClear = async () => {
    if (treeOrNot) {
      setTreeData([-1]);
    } else {
      setArrayData([]);
    }
  };

  const handleNext = () => {
    if (index < stepArrayLength - 1) index++;
    setIndex(index);
  };

  const handlePrevious = () => {
    if (index >= 0) index--;
    setIndex(index);
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
        {currentOperation === "queue" ? "Enqueue" : "Insert"}
      </button>

      <button className="button delete" onClick={handleDelete}>
        {currentOperation === "queue" ? "Dequeue" : "Delete"}
      </button>

      <button className="button clear" onClick={handleClear}>
        Clear
      </button>

      <button className="button start" onClick={handleSubmit}>
        Start Algorithm
      </button>

      <button className="big-button previous" onClick={handlePrevious}>
        Previous Step
      </button>

      <button className="big-button next" onClick={handleNext}>
        Next Step
      </button>
    </div>
  );
}

export default UserOperationsBox;
