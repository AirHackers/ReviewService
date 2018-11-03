import React from 'react';
import { mount } from 'enzyme';
import SearchReviews from '../../client/src/components/searchbar';


test('check for inputbox', () => {
  const serachbar = mount(<SearchReviews />);
  const input = serachbar.find('input').length;
  const img = serachbar.find('img').length;
  expect(input).toBe(1);
  expect(img).toBe(1);
});
