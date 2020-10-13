import { graphql } from 'gatsby';
import React from 'react';

export default function SingleSlicemaster({ data }) {
  console.log(data);
  return <div />;
}

export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
    }
  }
`;
