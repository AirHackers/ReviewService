import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }
    getData() {
        
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default App;