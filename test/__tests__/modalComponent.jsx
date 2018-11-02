import React from 'react';
import {shallow, mount, render} from 'enzyme';
import ButtomReviewPart from './../../client/src/components/buttomreviewpart';
import TopBarTotalNumber from './../../client/src/components/topreviewbar';

describe('buttom review bar component', () => {
    it('should invoke the handleOpenModal function when flag button get clicked', () => {
      const handleOpenModal= jest.fn();
      const data=[1];
      const wrapper = shallow(<ButtomReviewPart data={data} handleOpenModal={handleOpenModal}/>);
      const flagImg = wrapper.find('.reviewUserImgFlag');
      flagImg.simulate('click');
      expect(handleOpenModal).toHaveBeenCalled();
    })
})
