import { Link } from 'react-router-dom';
import React from 'react';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
    <div>Nav</div>
    <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', padding: 0 }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/CandidateSearch">Candidate Search</Link>
      </li>
      <li>
        <Link to="/SavedCandidates">Saved Candidates</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    </nav>
  );
};

export default Nav;
