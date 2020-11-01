import React from 'react';

function CurrentlySlicing() {
  return (
    <>
      <p>Test</p>
    </>
  );
}

function HotSlices() {
  return (
    <>
      <p>Test</p>
    </>
  );
}

function HomePage() {
  return (
    <>
      <div className="center">
        <h1>The Best Pizza Downtown!</h1>
        <p>Open 11am to 11pm Every Single Day</p>
        <div>
          <CurrentlySlicing />
          <HotSlices />
        </div>
      </div>
    </>
  );
}

export default HomePage;
