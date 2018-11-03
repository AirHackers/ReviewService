import React from 'react';

const SearchReviews = props => (
  <div className="reviewSerach reviewColumn">
    <img alt="hi" src="pics/search.png" height="30" width="30" />
    <input id="searchbarinput" className="reviewSearchInput" placeholder="Search reviews" onChange={() => props.onHandleSearch(document.getElementById('searchbarinput').value)} />
  </div>
);
export default SearchReviews;
