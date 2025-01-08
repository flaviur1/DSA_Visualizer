import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import NotFound from "./pages/NotFound";
import MainView from "./components/MainView";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu className="menu" />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/alg/:operation" element={<MainView />} />
          <Route path="/ds/:operation" element={<MainView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
