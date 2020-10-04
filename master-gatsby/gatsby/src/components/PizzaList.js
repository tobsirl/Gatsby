import React from 'react';

function SinglePizza({ pizza }) {
  console.log(pizza);
  return (
    <>
      <h3>{pizza.name}</h3>
      <p>{pizza.toppings[0].name}</p>
    </>
  );
}

export default function PizzaList({ pizzas }) {
  return (
    <>
      <p>List of pizzas</p>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </>
  );
}
