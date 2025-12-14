import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Todos los campos son obligatorios.");
      setSuccess(false);
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      setSuccess(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setSuccess(false);
      return;
    }

    setError(false);
    setSuccess(true);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <form onSubmit={validarDatos} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
        
        {/* Mensaje de Error */}
        {error && <p className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm text-center">{error}</p>}
        
        {/* Mensaje de Éxito */}
        {success && <p className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm text-center">¡Registro exitoso!</p>}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Ingresa tu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
          <input 
            type="password" 
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Confirmar Contraseña</label>
          <input 
            type="password" 
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Repite tu contraseña"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;