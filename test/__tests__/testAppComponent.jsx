import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/src/components/app';

describe('App component', () => {
  it('should toggle the state when flag button get clicked', () => {
    const app = shallow(<App />);
    expect(app.state().showModal).toBe(false);
  });
});

describe('App component', () => {
  test('checking on handleOpenModal function of <App/>', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleOpenModal();
  });

  test('checking on handleCloseModal function of <App/>', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleCloseModal();
  });

  test('checking on getData function of <App/>', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().onSearchhandle();
  });

  test('checking on handleOpenModal function of <App/>', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().getData();
  });

  test('checking on render function of <App/>', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().render();
  });
});
