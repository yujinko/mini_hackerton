import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SignUp from "./SignUp";
import Login from "./Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
