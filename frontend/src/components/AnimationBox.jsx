// In this component, we show the representation of the data structure, and each step the algorithm makes
import { useState, useEffect } from "react";
import "../styles/Animation.css";

function AnimationBox({ dataStructure }) {
  const makeSquare = (number, index) => {
    return (
      <div className="square" key={index}>
        {number}
        <div className="index">{index}</div>
      </div>
    );
  };

  return (
    <div>{dataStructure.map((number, index) => makeSquare(number, index))}</div>
  );
}

export default AnimationBox;
