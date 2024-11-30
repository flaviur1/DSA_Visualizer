// In this component, we show the representation of the data structure, and each step the algorithm makes
import { useState, useEffect } from "react";

function AnimationBox({dataStructure}) {
  return (
    <div>
      <p>Aici va aparea animatia</p>
      <p>Current Array: {JSON.stringify(dataStructure)}</p>
    </div>
  );
}

export default AnimationBox;
