import React from 'react';


const TopBarTotalNumber = props => (
  <div className="reviewColumn reviewTotalNumParent">
    <h2 className="reviewTotalNumber">
      {props.totalNumber}
      {' '}
&nbsp; Reviews
    </h2>
  </div>
);

export default TopBarTotalNumber;
