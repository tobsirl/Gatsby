import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

function SinglePizza({ pizza }) {
  console.log(pizza);
  return (
    <>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>{' '}
        </h2>
        <p>{pizza.toppings.map((toppings) => toppings.name).join(', ')}</p>
        <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
      </Link>
    </>
  );
}

export default function PizzaList({ pizzas }) {
  return (
    <PizzaGridStyles>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </PizzaGridStyles>
  );
}
