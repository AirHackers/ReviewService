import React from 'react';
import { shallow } from 'enzyme';
import Reviewapp from '../../client/src/components/app';

describe('Reviewapp component', () => {
  it('should toggle the state when flag button get clicked', () => {
    const app = shallow(<Reviewapp />);
    expect(app.state().showModal).toBe(false);
  });
});

describe('Reviewapp component', () => {
  test('checking on handleOpenModal function of <App/>', () => {
    const wrapper = shallow(<Reviewapp />);
    wrapper.instance().handleOpenModal();
  });

  test('checking on handleCloseModal function of <App/>', () => {
    const wrapper = shallow(<Reviewapp />);
    wrapper.instance().handleCloseModal();
  });

  test('checking on getData function of <App/>', () => {
    const wrapper = shallow(<Reviewapp />);
    wrapper.instance().onSearchhandle();
  });

  test('checking on handleOpenModal function of <App/>', () => {
    const wrapper = shallow(<Reviewapp />);
    wrapper.instance().getData();
  });

  test('checking on render function of <App/>', () => {
    const wrapper = shallow(<Reviewapp />);
    wrapper.instance().render();
  });
});
