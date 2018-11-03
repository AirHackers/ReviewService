import React from 'react';
import $ from 'jquery';
import TopReviewBar from './topreviewbar';
import ButtomReviewPart from './buttomreviewpart';
import Report from './report.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      showModal: false
    };
    this.getData = this.getData.bind(this);
    this.onSearchhandle = this.onSearchhandle.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    let newState = this.state;
    newState.showModal = true;
    this.setState(newState);
  }
  handleCloseModal() {
    let newState = this.state;
    newState.showModal = false;
    this.setState(newState);
  }
  componentDidMount() {
    this.getData();
  }
  onSearchhandle(text) {
    let searched_data=[];
    const param = window.location.href.slice(32, -1);
    $.ajax({
      method: 'Get',
      url: `http://localhost:3003/api/homes/${param}/allReviews`,
      success: (data) => {
        this.setState({ data });
        searched_data = this.state.data.filter((item) => {
          return item.review.includes(text);
        });
        if(searched_data.length>0){
          this.setState({data: searched_data});
        }
      }
    }); 
  }
  getData() {
    const param = window.location.href.slice(32, -1);
    $.ajax({
      method: 'Get',
      url: `http://localhost:3003/api/homes/${param}/allReviews`,
      success: (data) => {
        this.setState({ data });
      },
    });
  }
  render() {
    let topPart;
    let bottomPart;
    if(this.state.data) {
      topPart = <TopReviewBar data={this.state.data[0]} onSearchhandle={this.onSearchhandle} />
      bottomPart = <ButtomReviewPart data={this.state.data} handleOpenModal={this.handleOpenModal}/>
    } else {
      topPart = <div>Loading...</div>
    }
    return (
      <div>
        {topPart}
        <br/>
        {bottomPart}
        <Report
            showModal={this.state.showModal}
            handleOpenModal={this.handleOpenModal}
            handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
export default App;
