import React from 'react';
import { Link, navigate } from 'gatsby';

function goToSliceMaster() {
  setTimeout(() => {
    console.log(`Go to slicemaster`);
    navigate('/slicemaster');
  }, 2000);
}
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
        <li>
          <button type="button" onClick={goToSliceMaster}>
            Click me to see slicemasters after 2 seconds
          </button>
        </li>
      </ul>
    </nav>
  );
}
