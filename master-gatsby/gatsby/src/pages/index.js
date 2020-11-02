import React from 'react';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/Grids';

function CurrentlySlicing({ slicemasters }) {
  return (
    <>
      <h1>Slicemasters</h1>
      {slicemasters.map((master) => (
        <p>{master.name}</p>
      ))}
    </>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <>
      <h1>Hot Slices</h1>
      {hotSlices.map((slice) => (
        <p>{slice.name}</p>
      ))}
    </>
  );
}

function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();

  return (
    <>
      <HomePageGrid className="center">
        <h1>The Best Pizza Downtown!</h1>
        <p>Open 11am to 11pm Every Single Day</p>
        <div>
          <CurrentlySlicing slicemasters={slicemasters} />
          <HotSlices hotSlices={hotSlices} />
        </div>
      </HomePageGrid>
    </>
  );
}

export default HomePage;
