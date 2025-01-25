import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./Routes.js";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
