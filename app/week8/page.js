// LoginPage.js
"use client";

import { auth } from './firebase'; 
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
      // Here you would navigate to the shopping page
      history.push('/ShoppingPage');
    } catch (error) {
      console.error("Error logging in: ", error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login with GitHub</button>
      </form>
    </div>
  );
};

export default LoginPage;
