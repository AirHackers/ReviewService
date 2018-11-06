import React from 'react';

const SERVER = 'http://localhost:3003/homes/0';

const SearchReviews = props => (
  <div className="reviewSerach reviewColumn">
    <img alt="hi" src={`${SERVER}/pics/search.png`} height="30" width="30" />
    <input id="searchbarinput" className="reviewSearchInput" placeholder="Search reviews" onChange={() => props.onHandleSearch(document.getElementById('searchbarinput').value)} />
  </div>
);
export default SearchReviews;
