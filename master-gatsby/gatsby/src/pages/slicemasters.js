import { graphql } from 'gatsby';
import React from 'react';

export default function SlicemastersPage({ data }) {
  console.log();
  const slicemasters = data.slicemasters.nodes;
  console.log(slicemasters);

  return (
    <>
      <p>
        Hey, this is slice masters page, we have {data.slicemasters.totalCount}{' '}
        slicemasters
      </p>
      {slicemasters.map((master) => (
        <p key={master.id}>{master.name}</p>
      ))}
    </>
  );
}

export const query = graphql`
  query SliceMastersQuery {
    slicemasters: allSanityPerson {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
