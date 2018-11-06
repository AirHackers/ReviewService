import React from 'react';


const TopBarTotalNumber = props => (
  <div className="reviewColumn reviewTotalNumParent">
    <h3 className="reviewTotalNumber">
      {props.totalNumber}
&nbsp; Reviews
    </h3>
  </div>
);

export default TopBarTotalNumber;
