import React from 'react';

const Header = () => {
  const backgroundUrl = "https://placehold.co/1920x400/171717/FDE68A?text=Fondo+Pizzeria+Mamma+Mia";
  
  const bannerStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(80%)',
  };

  return (
    <header 
      className="text-center py-20 px-4 mb-8 bg-gray-900 shadow-lg"
      style={bannerStyle}
    >
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          ¡Pizzería Mamma Mia!
        </h1>
        <p className="text-xl md:text-2xl text-yellow-300 font-medium drop-shadow-md">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </header>
  );
};

export default Header;