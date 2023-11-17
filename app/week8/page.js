// LoginPage.js
"use client";

import React, { useState } from 'react';
import { useUserAuth } from "./_utils/auth-context";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { gitHubSignIn } = useUserAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await gitHubSignIn(email, password);
      alert('Login successful');
      history.push('/ShoppingPage'); // Navigate to the shopping page
    } catch (error) {
      console.error("Error logging in: ", error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <h1 className="w-full text-center text-3xl font-bold mb-10">Login</h1>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="mb-6">
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login with GitHub
          </button>
        </div>
        <div className="flex">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white m-2 w-1/2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Google</button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white m-2 w-1/2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Facebook</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
