import React, { Component } from 'react';
import Company from './components/company';

class App extends Component {
    render() {
        return (
            <div>
            <h1>Team Status App</h1>
            <Company />
            </div>
        );
    }
}

export default App;