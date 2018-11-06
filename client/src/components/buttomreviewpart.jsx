/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const SERVER = 'http://localhost:3003/homes/0';

const ButtomReviewPart = props => (
  props.data.map(item => (
    <div key={item.id} className="reviewBottomParent">
      <div className="reviewUserImgPart">
        <img alt="hi" className="reviewUserImgPartCol reviewUserImg" src={item.photo} />
        <div className="reviewUserImgPartCol" />
        <div className="reviewUserImgPartCol">
          <div className="reviewBesidePhoto font">{item.username}</div>
          <div className="reviewBesidePhoto font date">{item.createdAt}</div>
        </div>
        <div className="reviewUserImgPartCol reviewSpace" />
        <img alt="hi" className="reviewUserImgPartCol reviewUserImgFlag" src={`${SERVER}/pics/flag3.png`} onClick={props.handleOpenModal} />
      </div>
      <br />
      <div className="reviewReview font">
        {item.review}
      </div>
      <div className="reviewParentLine">
        <div className="reviewLine" />
      </div>
    </div>
  ))
);

export default ButtomReviewPart;
