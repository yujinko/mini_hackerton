import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SignUp from "./SignUp";
import Login from "./Login";
import Main from "./Main";
import Search from "./Search";
import Nav from "./Nav";
import Footer from "./Footer";

export default function App() {
  return (
    <>
    {/* <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router> */}
    <div>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
    </>
  );
}

