export interface Car {
  _id: string; // Assuming this is the unique identifier for a car
  make: string;
  model: string;
  images: Array<{
    _id: string; // Assuming this is the unique identifier for an image
    url: string; // URL of the image
    // altText: string; // Alternative text for the image
  }>;
  price: number;
  age: number;
  mileage: number;
  fuelType: string;
  location: string;
  colour: string;
  bodyType: string;
  gearbox: string;
  engineSize: string;
  specification: Array<string>; // Array of strings for features
  doors: number;
  seats: number;
  reserved: boolean;
  owner: string;
  createdAt: string; // Timestamp for when the car was created
  updatedAt: string; // Timestamp for when the car was last updated
}
