// In this component, we show the code used for the algorithms or operations for the data structures
import { useState, useEffect } from "react";

function CodeBox() {
  return (
    <div>
      <p>       <p>def bubbleSort(arr):</p> 
            <p>for i in range(len(arr)):</p>
                swapped = False
                for j in range(0, len(arr)-i-1):
                   <p>if arr[j]  arr[j+1]:</p> 
                        aux = arr[j]
                        arr[j] = arr[j+1]
                        arr[j+1] = aux
                        swapped = True
                if (swapped == False):
                    break</p>
    </div>
  );
}

export default CodeBox;
