import React from 'react';
import ReactModal from 'react-modal';
// ReactModal.setAppElement('#app');
const SERVER = 'http://ec2-18-222-214-168.us-east-2.compute.amazonaws.com:3003/homes/0/';


function Report(props) {
  return (
    <div>
      <ReactModal
        isOpen={props.showModal}
        contentLabel="Contact"
        onRequestClose={props.handleCloseModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div>
          <img src={`${SERVER}/pics/cross.png`} width="50" height="50" onClick={props.handleCloseModal} />
          <h3 className="font">Do you want to anonymously report this review?</h3>
          <h5 className="font">If so, please choose one of the following reasons. Learn more</h5>
          <br />
          <form>
            <fieldset className="fieldset">
              <legend>Select a maintenance drone</legend>
              <div className="reviewExitModal">
                <label className="reviewExitchild" htmlFor="huey">Inappropriate Content</label>
                <div className="reviewExitchild" />
                <input className="reviewExitchild" type="radio" id="huey" name="drone" value="huey" checked />
              </div>
              <div>This review contains violent, graphic, promotional, or otherwise offensive content.</div>
              <div className="reviewParentLine">
                <div className="reviewLine" />
              </div>
              <div className="reviewExitModal">
                <label className="reviewExitchild" htmlFor="dewey">Dishonest or hateful content</label>
                <div className="reviewExitchild" />
                <input className="reviewExitchild" type="radio" id="dewey" name="drone" value="dewey" />
              </div>
              <div>This review is purposefully malicious and assaulting.</div>
              <div className="reviewParentLine">
                <div className="reviewLine" />
              </div>
              <div className="reviewExitModal">
                <label className="reviewExitchild" htmlFor="louie">Fake content</label>
                <div className="reviewExitchild" />
                <input className="reviewExitchild" type="radio" id="louie" name="drone" value="louie" />
              </div>
              <div>This review contains false information or may be fake.</div>
              <div className="reviewParentLine">
                <div className="reviewLine" />
              </div>
            </fieldset>
            <div className="reviewExitModal">
              <div className="reviewExitchild reviewBackColor" onClick={props.handleCloseModal}>Back</div>
              <div className="reviewExitchild" />
              <button className="reviewExitchild reviewColor" onClick={props.handleCloseModal}>Submit</button>
            </div>

          </form>

        </div>
      </ReactModal>
    </div>
  );
}

export default Report;
