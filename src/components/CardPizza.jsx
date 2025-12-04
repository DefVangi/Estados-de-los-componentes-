import React from 'react';
import { formatTotal } from '../utils/formatUtils';

const CardPizza = ({ name, ingredients, price, imageUrl }) => {
  const formattedPrice = formatTotal(price);
  
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-[1.02] border border-yellow-200">
      <img 
        className="w-full h-48 object-cover object-center" 
        src={imageUrl} 
        alt={`Pizza ${name}`} 
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = "https://placehold.co/400x300/FDBA74/6D28D9?text=Pizza+Placeholder"; 
        }}
      />
      <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
          
          <div className="text-sm text-gray-600 mb-3">
            <p className="font-semibold text-yellow-600 mb-1">Ingredientes:</p>
            <ul className="list-none p-0 ml-0 space-y-1">
              {ingredients.map((ing, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-yellow-500 mr-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm4.707 5.707a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 11.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                  </span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-2xl font-extrabold text-red-600 mb-4 text-center">{formattedPrice}</p>
          <div className="flex justify-between space-x-2">
            <button className="flex-1 bg-white text-gray-800 border border-gray-300 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-150">
              Ver Más ➪
            </button>
            <button className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-150">
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;