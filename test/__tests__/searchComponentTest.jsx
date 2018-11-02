import SearchReviews from './../../client/src/components/searchbar';
import React from 'react';
import {shallow, mount, render} from 'enzyme';


test('check for inputbox', () => {
    var serachbar = mount(<SearchReviews />);
    var input = serachbar.find('input').length;
    var img = serachbar.find('img').length;
    expect(input).toBe(1);
    expect(img).toBe(1);
});