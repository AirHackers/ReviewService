import React from 'react';
import { shallow } from 'enzyme';
import Reviewapp from '../../client/src/components/app';
import TopReviewBar from '../../client/src/components/topreviewbar';
import ButtomReviewPart from '../../client/src/components/buttomreviewpart';
import Report from '../../client/src/components/report';

describe('<Reviewapp />', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Reviewapp />);
    expect(component.exists()).toBe(true);
  });
  it('should render a "Report" component', () => {
    const component = shallow(<Reviewapp />);
    expect(component.find(Report).length).toBe(1);
  });
  it('should render a "TopReviewBar" component', () => {
    const data = [1];
    const component = shallow(<Reviewapp />);
    component.setState({ data });
    expect(component.find(TopReviewBar).length).toBe(1);
  });
  it('should render a "ButtomReviewPart" component', () => {
    const data = [1];
    const component = shallow(<Reviewapp />);
    component.setState({ data });
    expect(component.find(ButtomReviewPart).length).toBe(1);
  });
});
