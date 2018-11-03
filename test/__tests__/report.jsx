import React from 'react';
import { shallow } from 'enzyme';
import Report from '../../client/src/components/report';
import RateStarPresentation from '../../client/src/components/starpresentation';
import TopReviewBar from '../../client/src/components/topreviewbar';
import SearchReviews from '../../client/src/components/searchbar';
import TopBarTotalNumber from '../../client/src/components/reviewtotalnumber';

describe('<Report />', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Report />);
    expect(component.exists()).toBe(true);
  });
});

describe('<RateStarPresentation />', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<RateStarPresentation />);
    expect(component.exists()).toBe(true);
  });
});

describe('<TopReviewBar />', () => {
  it('should render correctly with props', () => {
    const handleOpenModal = jest.fn();
    const data = [1];
    const component = shallow(<TopReviewBar data={data} handleOpenModal={handleOpenModal} />);
    expect(component.exists()).toBe(true);
  });
});

describe('<SearchReviews />', () => {
  it('should render correctly with props', () => {
    const handleOpenModal = jest.fn();
    const data = [1];
    const component = shallow(<SearchReviews data={data} handleOpenModal={handleOpenModal} />);
    expect(component.exists()).toBe(true);
  });
});

describe('<TopBarTotalNumber />', () => {
  it('should render correctly with props', () => {
    const component = shallow(<TopBarTotalNumber totalNumber={2} />);
    expect(component.exists()).toBe(true);
  });
});

