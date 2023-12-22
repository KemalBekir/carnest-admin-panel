import "./App.css";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";

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

export default function App() {
  return (
    <>
      <div className="flex">
        <div className="bg-gray-800 w-1/5 h-auto min-h-screen">
          <Navbar />
        </div>
        <div className="flex-1">
          <Hero />
          <Routes>
            <Route path="/dashboard" element={<Table data={mockData} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
