import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SlicemasterGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export default function SlicemastersPage({ data }) {
  const slicemasters = data.slicemasters.nodes;
  console.log(slicemasters);

  return (
    <>
      <SlicemasterGrid>
        {slicemasters.map((master) => (
          <div key={master.id}>
            <Link to={`/slicemaster/${master.slug.current}`}>
              <h2>
                <span className="mark"> {master.name}</span>
              </h2>
            </Link>
            <Img fluid={master.image.asset.fluid} alt={master.name} />
            <p className="description">{master.description}</p>
          </div>
        ))}
      </SlicemasterGrid>
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
