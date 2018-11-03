import React from 'react';
import TopBarTotalNumber from './reviewtotalnumber';
import RateStarPresentation from './starpresentation';
import SearchReviews from './searchbar';

const TopReviewBar = props => (
  <div>
    <div className='reviewParentLine'>
      <div className='reviewLine'></div>
    </div>
    <div className='reviewTopParent font'>
      <TopBarTotalNumber totalNumber={props.data.numberOfReviews} />
      <RateStarPresentation rate={props.data.overallrate} />
      <div className='reviewColumn'></div>
      <SearchReviews onHandleSearch={props.onSearchhandle} />
    </div>
    <div className='reviewParentLine'>
      <div className='reviewLine'></div>
    </div>
    <div className='reviewParent'>
      <div className='reviewCol font'>Accuracy</div><RateStarPresentation rate={props.data.accuracy} />
      <div className='reviewCol font'>Location</div><RateStarPresentation rate={props.data.location} />
    </div>
    <div className='reviewParent'>
      <div className='reviewCol font'>Communication</div><RateStarPresentation rate={props.data.communication} />
      <div className='reviewCol font'>Check-in</div><RateStarPresentation rate={props.data.check_in} />
    </div>
    <div className='reviewParent'>
      <div className='reviewCol font'>Cleanliness</div><RateStarPresentation rate={props.data.cleanliness} />
      <div className='reviewCol font'>Value</div><RateStarPresentation rate={props.data.value} />
    </div>
  </div>
);

export default TopReviewBar;
