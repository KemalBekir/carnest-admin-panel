import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <>
      <Navbar />
    </>
  );
}
