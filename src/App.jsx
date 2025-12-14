import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register'; 
import Login from './components/Login';       
export default function App() {
  const [token, setToken] = useState(true); 
  
  const [total, setTotal] = useState(25000); 

  const toggleLogin = () => setToken(!token);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      
      <Navbar token={token} total={total} />
      
      {/*<div className="bg-gray-200 p-4 text-center">
        <p className="mb-2 text-gray-800">
          Estado actual: <strong>{token ? 'Logueado 🔓' : 'No Logueado 🔐'}</strong>
        </p>
        <button 
          onClick={toggleLogin} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Cambiar Estado (Simular Login/Logout)
        </button>
      </div>*/}

      {/*<Home />*/}
      <Register />
      {/*<Login />*/}
      <Footer />
      
    </div>
  );
}

