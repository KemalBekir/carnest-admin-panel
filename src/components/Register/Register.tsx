import React, { useState, FormEvent } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      `Email: ${email}, Username: ${username}, Password: ${password}, Re-entered Password: ${rePass}`
    );
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
        <label htmlFor="username" className="block mb-2">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <div className="mb-4">
        <label htmlFor="rePass" className="block mb-2">
          Confirm Password:
        </label>
        <input
          type="password"
          id="rePass"
          value={rePass}
          onChange={(e) => setRePass(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg focus:outline-none hover:bg-blue-600 transition duration-300"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
