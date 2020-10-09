import React from 'react';
import { graphql } from 'gatsby';

export default function FourOhFourPage({ data }) {
  const beers = data.beers.nodes;
  console.log(beers);
  return (
    <>
      <p>Hey - This is the Beer page</p>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
    </>
  );
}

export const query = graphql`
  query BeersQuery {
    beers: allBeer {
      nodes {
        name
        id
        price
        rating {
          reviews
          average
        }
      }
    }
  }
`;
