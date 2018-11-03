import React from 'react';
import ReactModal from 'react-modal';
//ReactModal.setAppElement('#app');


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
              <img src="pics/cross.png" width="50" height="50" onClick={props.handleCloseModal}/>
            <h3 className="font">Do you want to anonymously report this review?</h3>
            <h5 className="font">If so, please choose one of the following reasons. Learn more</h5>
            <br/>
            <form>
              <fieldset className="fieldset">
                <legend >Select a maintenance drone</legend>
                <div className="reviewExitModal">
                  <label className="reviewExitchild" for="huey">Inappropriate Content</label>
                  <div className="reviewExitchild"></div>
                  <input className="reviewExitchild" type="radio" id="huey" name="drone" value="huey" checked />
                </div>
                <div>This review contains violent, graphic, promotional, or otherwise offensive content.</div>
                <div className='reviewParentLine'>
                  <div className='reviewLine'></div>
                </div>
                <div className="reviewExitModal">
                  <label className="reviewExitchild" for="dewey">Dishonest or hateful content</label>
                  <div className="reviewExitchild"></div>
                  <input className="reviewExitchild" type="radio" id="dewey" name="drone" value="dewey" /> 
                </div>
                <div>This review is purposefully malicious and assaulting.</div>
                <div className='reviewParentLine'>
                  <div className='reviewLine'></div>
                </div>
                <div className="reviewExitModal">
                  <label className="reviewExitchild" for="louie">Fake content</label>
                  <div className="reviewExitchild"></div>
                  <input className="reviewExitchild" type="radio" id="louie" name="drone" value="louie" />
                </div>
                <div>This review contains false information or may be fake.</div>
                <div className='reviewParentLine'>
                  <div className='reviewLine'></div>
                </div>
              </fieldset>
              <div className="reviewExitModal">
                <div className="reviewExitchild reviewBackColor" onClick={props.handleCloseModal}>Back</div>
                <div className="reviewExitchild"></div>
                <button className="reviewExitchild reviewColor" onClick={props.handleCloseModal}>Submit</button>
              </div>
                
              </form>

          </div>
        </ReactModal>
      </div>
    );
  }
  
  export default Report;
