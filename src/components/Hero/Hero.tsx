import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-8">Discover amazing things here.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
