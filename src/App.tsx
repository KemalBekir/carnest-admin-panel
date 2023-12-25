import "./App.css";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { getAllUsers } from "./servies/userService";
import { useEffect } from "react";
import { Car } from "./interfaces/interfaces";
import CarTable from "./components/CarTable/CarTable";

const generateRandomCar = (): Omit<Car, "_id"> => {
  const randomDate = new Date();
  const imageUrl = "https://example.com/image.png";

  return {
    createdAt: randomDate,
    updatedAt: randomDate,
    make: "Toyota",
    model: "Corolla",
    images: [{ _id: "image_id_1", url: imageUrl }],
    price: 20000,
    age: 3,
    mileage: 50000,
    fuelType: "Petrol",
    location: "New York",
    colour: "Red",
    bodyType: "Sedan",
    gearbox: "Automatic",
    engineSize: "2.0L",
    specification: [
      { key: "Feature 1", value: "Description for Feature 1" },
      { key: "Feature 2", value: "Description for Feature 2" },
    ],
    doors: 4,
    seats: 5,
    reserved: false,
    owner: "user_id_123",
  };
};

const mockCarData: Car[] = [];

for (let i = 0; i < 5; i++) {
  const carData = generateRandomCar();
  const mockCar: Omit<Car, "_id"> & { _id: string } = {
    _id: `car_id_${i}`,
    ...carData,
  };
  mockCarData.push(mockCar as Car);
}

console.log(mockCarData);

export default function App() {
  useEffect(() => {
    getAllUsers()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex">
        <div className="bg-gray-800 w-1/5 h-auto min-h-screen">
          <Navbar />
        </div>
        <div className="flex-1">
          <Hero />
          <Routes>
            <Route path="/" element={<Table data={mockData} />} />
            <Route path="/cars" element={<CarTable data={mockCarData} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

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
