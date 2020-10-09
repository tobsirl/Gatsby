import React from 'react';
import { graphql } from 'gatsby';

export default function BeersPage({ data }) {
  const beers = data.beers.nodes;
  // console.table(beers);
  return (
    <>
      <h2 className="center">
        We have {beers.length} Beers Available. Dine in Only!
      </h2>
      <div>
        {beers.map((beer) => {
          const rating = Math.round(beer.rating.average);
          return (
            <div key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              {beer.price}
              <p title={`${rating} out of 5 stars`}>
                {'⭐'.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {'⭐'.repeat(5 - rating)}
                </span>
                <span>{beer.rating.reviews}</span>
              </p>
            </div>
          );
        })}
      </div>
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
        image
      }
    }
  }
`;
