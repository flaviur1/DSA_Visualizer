import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu";
import NotFound from "./pages/NotFound";
import MainView from "./components/MainView";

function App() {
  const [array, setArray] = useState([]);
  const [currentOperation, setCurrentOperation] = useState();

  const addElem = () => {};

  console.log(currentOperation);

  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Menu />
      </BrowserRouter> */}

      <BrowserRouter>
        <Menu onSelectOperation={setCurrentOperation} />
        <MainView currentOperation={currentOperation} />
      </BrowserRouter>

      
    </div>
  );
}

export default App;
