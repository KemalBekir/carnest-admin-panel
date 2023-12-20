import React from "react";
import Hero from "../Hero/Hero";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Table from "../Table/Table";

const mockData = [
  { userId: 1, username: "JohnDoe", email: "john@example.com", age: 30 },
  { userId: 2, username: "JaneSmith", email: "jane@example.com", age: 28 },
  { userId: 3, username: "AliceJohnson", email: "alice@example.com", age: 35 },
  { userId: 4, username: "BobJohnson", email: "bob@example.com", age: 42 },
  { userId: 5, username: "EveWilliams", email: "eve@example.com", age: 25 },
  {
    userId: 6,
    username: "MichaelBrown",
    email: "michael@example.com",
    age: 37,
  },
  { userId: 7, username: "OliviaMiller", email: "olivia@example.com", age: 31 },
  {
    userId: 8,
    username: "WilliamDavis",
    email: "william@example.com",
    age: 29,
  },
  { userId: 9, username: "SophiaGarcia", email: "sophia@example.com", age: 26 },
  { userId: 10, username: "LiamMartinez", email: "liam@example.com", age: 33 },
];

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
        {/* TODO: adjust components */}
        <Login />
        <Register />
        <Table data={mockData} />
      </div>
    </div>
  );
};

export default Navbar;
