import React from 'react';
const SERVER = 'http://localhost:3003/homes/0';

class RateStarPresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullStars: [],
      emptyStars: [],
    };
    this.createStar = this.createStar.bind(this);
  }

  componentDidMount() {
    this.createStar();
  }

  createStar() {
    const fullStars = [];
    const emptyStars = [];
    for (let i = 0; i < this.props.rate; i += 1) {
      fullStars.push(<img alt="hi" src={`${SERVER}/pics/star.png`} height="20" width="20" />);
    }
    for (let i = 0; i < 5 - this.props.rate; i += 1) {
      emptyStars.push(<img alt="hi" src={`${SERVER}/pics/Star_empty.png`} height="20" width="20" />);
    }
    this.setState({ fullStars });
    this.setState({ emptyStars });
  }

  render() {
    return (
      <div className="reviewColumn">
        {this.state.fullStars.map(item => item)}
        {this.state.emptyStars.map(item => item)}
      </div>
    );
  }
}
export default RateStarPresentation;
