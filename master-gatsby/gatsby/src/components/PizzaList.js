import React from 'react';

export default function PizzaList({ pizzas }) {
  console.log(pizzas);
  return (
    <>
      <p>List of pizzas</p>
      {pizzas.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
    </>
  );
}
