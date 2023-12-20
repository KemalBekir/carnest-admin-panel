import React, { useState, FormEvent } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-8 p-4 border rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg focus:outline-none hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
