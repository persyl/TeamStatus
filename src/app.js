import React, { Component } from 'react';
import Company from './components/company';
import ScaleControls from './components/scaleControls/ScaleControls';

import './app.less';

class App extends Component {
    render() {
        return (
            <div className='ts_main'>
                <ScaleControls />
                <h1>Team Status App</h1>
                <Company />
            </div>
        );
    }
}

export default App;