import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Main from "./Main";
import Search from "./Search";
import Nav from "./Nav";
import Footer from "./Footer";
import Detail from "./Detail"
import useStore from "./store";

export default function App() {
  const isLogin = useStore((state) => state.isLogin);
  const loginComplete = useStore((state) => state.loginComplete);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Main />} />
          <Route path="/movie/:movieId" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}
