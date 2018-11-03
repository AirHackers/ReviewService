import React from 'react';
import ReactModal from 'react-modal';
//ReactModal.setAppElement('#app');

const ButtomReviewPart = props => (
    props.data.map((item, index) => 
    <div key={index} className='reviewBottomParent'>
        <div className='reviewUserImgPart'>
            <img className='reviewUserImgPartCol reviewUserImg' src={item.photo} />
            <div className='reviewUserImgPartCol'></div>
            <div className='reviewUserImgPartCol'>
                <div className='reviewBesidePhoto font'>{item.username}</div>
                <div className='reviewBesidePhoto font date'>{item.createdAt}</div>
            </div>
            <div className='reviewUserImgPartCol reviewSpace'></div>
            <img className='reviewUserImgPartCol reviewUserImgFlag' src={'pics/flag3.png'} onClick={props.handleOpenModal}/>
        </div>
        <br/>
        <div className="reviewReview font">
            {item.review}
        </div>
        <div className='reviewParentLine'>
            <div className='reviewLine'></div>
        </div>
    </div>)
)

export default ButtomReviewPart; 