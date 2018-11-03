import React from 'react';

class SearchReviews extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className='reviewSerach reviewColumn'>
                <img src={'pics/search.png'} height="30" width="30"/>
                <input id="searchbarinput" className='reviewSearchInput' placeholder='Search reviews' onChange={() => this.props.onHandleSearch(document.getElementById('searchbarinput').value)}/>
            </div>
        );
    }
}
export default SearchReviews;