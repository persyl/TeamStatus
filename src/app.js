import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Company from './components/company';
import ScaleControls from './components/scaleControls/ScaleControls';
import * as appActions from './redux/actions/appActions';

import './app.less';

class App extends Component {
    render() {
        if(!this.props.initiated){
            setTimeout(() => {
                console.log('APP INIT CALLED...', this.props.initiated);
                this.props.AppActions.appInit(); //For Redux demo purpose
            }, 3000);
        }
        
        return (
            <div className='ts_main'>
                <ScaleControls />
                <h1>Team Status App ({ this.props.initiated ? 'Redo' : 'Initierar...' })</h1>
                <Company />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		initiated: state.app.initiated,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		AppActions: bindActionCreators(appActions, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
