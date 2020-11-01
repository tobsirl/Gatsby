import { useState, useEffect } from 'react';

function useLatestData() {
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
        query: `
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
    });
  }, []);
}


