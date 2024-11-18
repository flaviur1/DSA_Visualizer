import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  const [array, setArray] = useState([]);

  const addElem = (arr, elem) => {};

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Menu />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
