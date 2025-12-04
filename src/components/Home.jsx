import React from 'react';
import Header from './Header'; 
import CardPizza from './CardPizza';

const Home = () => {
  const pizzas = [
    {
      name: "Pizza Napolitana",
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      price: 5950,
      imageUrl: "https://images.unsplash.com/photo-1723861113025-ea972fe48e98?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pizza Española",
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      price: 6950,
      imageUrl: "https://plus.unsplash.com/premium_photo-1730829006881-7a7c4c4aed91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pizza Pepperoni",
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      price: 6950,
      imageUrl: "https://images.unsplash.com/photo-1602658014714-26b99d5a45cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <Header /> 
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pizzas.map((pizza, index) => (
            <CardPizza
              key={index}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              imageUrl={pizza.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
