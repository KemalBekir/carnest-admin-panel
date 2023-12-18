import React from "react";
import Hero from "./Hero/Hero";

const Navbar: React.FC = () => {
  return (
    <div className="flex h-screen ">
      {/* Navbar */}
      <div className="bg-gray-800 w-1/5">
        {/* Your navbar content goes here */}
        {/* For example: */}
        <ul className="py-8">
          <li className="px-8 py-2 text-white">Home</li>
          <li className="px-8 py-2 text-white">About</li>
          <li className="px-8 py-2 text-white">Services</li>
          {/* ... */}
        </ul>
      </div>

      {/* Main Content (Takes the rest of the screen) */}
      <div className="flex-1">
        {/* Your main content goes here */}
        <Hero />
      </div>
    </div>
  );
};

export default Navbar;
