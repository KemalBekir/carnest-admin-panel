export interface Car {
  _id: string;
  make: string;
  model: string;
  images: Array<{ _id: string; url: string }>; // Updated images type
  price: number;
  age: number;
  mileage: number;
  fuelType: string;
  location: string;
  colour: string;
  bodyType: string;
  gearbox: string;
  engineSize: string;
  specification: Array<{ key: string; value: string }>; // Updated specification type
  doors: number;
  seats: number;
  reserved: boolean;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  username: string;
  email: string;
  role: "user" | "admin"; // Enumerated roles
}
