import "./styles.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from "./components/Home";
import TodoEditInput from "./components/TodoEditInput";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

export default function App() {
  const isLogged = useSelector((data) => data.auth.isLogged);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (isLogged) {
      if (pathname === "/login") {
        console.log("login");
        navigate("/");
      } else {
        console.log("p", pathname);
        navigate(pathname);
      }
    } else {
      console.log("pls log in");
      navigate("/login");
    }
  }, [isLogged, pathname, navigate]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path=":id/edit" element={<TodoEditInput />} />
      </Routes>
    </div>
  );
}
