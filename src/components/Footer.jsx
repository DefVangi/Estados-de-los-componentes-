import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center mt-8 shadow-inner">
      <div className="container mx-auto">
        <p className="text-sm font-light">
          © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Diseñado con ❤️ para la tarea de React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;