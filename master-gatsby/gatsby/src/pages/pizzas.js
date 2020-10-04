import { graphql } from 'gatsby';
import React from 'react';

export default function PizzasPage() {
  return (
    <>
      <p>Hey - This is the Pizza Page</p>
    </>
  );
}

// Page Queries
export const query = graphql`
  query PizzaQuery {
    allSanityPizza {
      nodes {
        id
        name
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
