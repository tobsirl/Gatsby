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
  query {
    allSanityPizza {
      nodes {
        id
        name
        price
        slug {
          current
        }
        toppings {
          name
        }
      }
    }
    allSanityPerson {
      nodes {
        name
      }
    }
  }
`;
