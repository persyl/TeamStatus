import React, { Component } from 'react';
import Company from './components/company';

import './app.less';

class App extends Component {
    render() {
        return (
            <div className='ts_main'>
            <h1>Team Status App</h1>
            <Company />
            </div>
        );
    }
}

export default App;