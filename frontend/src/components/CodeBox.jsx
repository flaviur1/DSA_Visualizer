// In this component, we show the code used for the algorithms or operations for the data structures
import { useState, useEffect } from "react";

function CodeBox() {
  return (
    <div style={{ whiteSpace: 'pre' }}>
      <h3>Code</h3>
      <p>def bubbleSort(arr):</p>
      <p>    for i in range(len(arr)):</p>
      <p>        swapped = False</p>
      <p>        for j in range(0, len(arr)-i-1):</p>
      <p>            if arr[j] {'>'} arr[j+1]:</p>
      <p>                aux = arr[j]</p>
      <p>                arr[j] = arr[j+1]</p>
      <p>                arr[j+1] = aux</p>
      <p>                swapped = True</p>
      <p>        if (swapped == False):</p>
      <p>            break</p>
    </div>
  );
}

export default CodeBox;
