import React from 'react';

export default class ErrorTest extends React.Component {

    state = {
        error: false
    };

    render() {
        if (this.state.error) {
            this.mytest.test = 'test';
        }
        return(
            <button onClick={() => this.setState({error: true})}
            >test error</button>
        );
    }
}