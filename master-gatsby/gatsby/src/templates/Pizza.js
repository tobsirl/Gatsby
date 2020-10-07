import { graphql } from 'gatsby';
import React from 'react';

export default function SinglePizzaPage({ data }) {
  console.log(data);
  return (
    <>
      <p>Single Page</p>
    </>
  );
}

// This need to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      id
      name
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        id
        name
        vegetarian
      }
    }
  }
`;
