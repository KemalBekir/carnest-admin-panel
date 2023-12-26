import React, { useState } from "react";
import { Car } from "../../interfaces/interfaces";

interface CarFormProps {
  onSubmit?: (car: Car) => void;
}

const initialCarData: Car = {
  _id: "",
  make: "",
  model: "",
  images: [],
  price: 0,
  age: 0,
  mileage: 0,
  fuelType: "",
  location: "",
  colour: "",
  bodyType: "",
  gearbox: "",
  engineSize: "",
  specification: [],
  doors: 0,
  seats: 0,
  reserved: false,
  owner: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const CarForm: React.FC<CarFormProps> = ({ onSubmit = (car: Car) => {} }) => {
  const [carData, setCarData] = useState<Car>(initialCarData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const updatedImages = [...carData.images];
    updatedImages[index].url = value;
    setCarData({ ...carData, images: updatedImages });
  };

  const handleAddImage = () => {
    setCarData({
      ...carData,
      images: [...carData.images, { _id: "", url: "" }],
    });
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...carData.images];
    updatedImages.splice(index, 1);
    setCarData({ ...carData, images: updatedImages });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(carData);
    setCarData(initialCarData); // Reset form fields after submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-4 p-6 bg-white rounded-md shadow-xl"
    >
      <label className="block mb-1 font-semibold">
        Make:
        <input
          type="text"
          name="make"
          value={carData.make}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Model:
        <input
          type="text"
          name="model"
          value={carData.model}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <div>
        {carData.images.map((image, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-1 font-semibold">
              Image URL:
              <input
                type="text"
                value={image.url}
                onChange={(e) => handleImageChange(e, index)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Remove Image
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddImage}
          className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Add Image
        </button>
      </div>

      <label className="block mb-1 font-semibold">
        Price:
        <input
          type="number"
          name="price"
          value={carData.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Age:
        <input
          type="number"
          name="age"
          value={carData.age}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Mileage:
        <input
          type="number"
          name="mileage"
          value={carData.mileage}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Fuel Type:
        <input
          type="text"
          name="fuelType"
          value={carData.fuelType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Location:
        <input
          type="text"
          name="location"
          value={carData.location}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Colour:
        <input
          type="text"
          name="colour"
          value={carData.colour}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Body Type:
        <input
          type="text"
          name="bodyType"
          value={carData.bodyType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Gearbox:
        <input
          type="text"
          name="gearbox"
          value={carData.gearbox}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Engine Size:
        <input
          type="text"
          name="engineSize"
          value={carData.engineSize}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Doors:
        <input
          type="number"
          name="doors"
          value={carData.doors}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Seats:
        <input
          type="number"
          name="seats"
          value={carData.seats}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block mb-1 font-semibold">
        Reserved:
        <input
          type="checkbox"
          name="reserved"
          checked={carData.reserved}
          onClick={() =>
            setCarData((prevState) => ({
              ...prevState,
              reserved: !prevState.reserved,
            }))
          }
          className="w-full my-5 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      {/* <label className="block mb-1 font-semibold">
        Owner:
        <input
          type="text"
          name="owner"
          value={carData.owner}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label> */}
      <button type="submit" className="w-full m-auto p-3 bg-blue-500 text-white rounded-md">Submit</button> 
    </form>
  );
};

export default CarForm;
