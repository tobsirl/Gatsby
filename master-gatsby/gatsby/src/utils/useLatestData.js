import { useState, useEffect } from 'react';

const gql = String.raw;
export default function useLatestData() {
  //  hot slices
  const [hotSlices, setHotSlices] = useState([]);

  // slicemasters
  const [slicemasters, setSlicemasters] = useState([]);

  useEffect(() => {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemasters {
                name
              }
              hotslices {
                name
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO: Check for errors
        // set the data to state
        setHotSlices(res.data.StoreSettings.hotslices);
        setSlicemasters(res.data.StoreSettings.slicemasters);
      });
  }, []);
  return {
    hotSlices,
    slicemasters,
  };
}
