import React from "react";
import Hero from "../Hero/Hero";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Table from "../Table/Table";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="flex h-auto">
      {/* Navbar */}
      <div className="bg-gray-800 w-1/5">
        {/* Your navbar content goes here */}
        {/* For example: */}
        <ul className="py-8">
          <li className="px-8 py-2 text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-8 py-2 text-white cursor">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="px-8 py-2 text-white cursor">
            <Link to="/login">Login</Link>
          </li>
          <li className="px-8 py-2 text-white cursor">
            <Link to="/register">Register</Link>
          </li>{" "}
          <li className="px-8 py-2 text-white cursor">
            <Link to="/cars">Cars</Link>
          </li>
        </ul>
      </div>

      {/* Main Content (Takes the rest of the screen) */}
      <div className="flex-1">{/* Your main content goes here */}</div>
    </div>
  );
};

export default Navbar;
