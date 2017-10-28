import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Company from './components/company/company';
import ScaledControl from './components/scaledControl/ScaledControl';
import * as appActions from './redux/actions/appActions';

import './app.less';

class App extends Component {
    render() {
        if (!this.props.initiated) {
            setTimeout(() => {
                console.log('APP INIT CALLED...', this.props.initiated);
                this.props.AppActions.appInit(); //For Redux demo purpose
            }, 3000);
        }

        const viewBox = `0 0 ${this.props.width} ${this.props.height}`;
        const style = {
            width: '100%',
            height: '100%',
        };

        return (
            <div className='ts_main'>
                <h1>Team Status App ({this.props.initiated ? 'Redo' : 'Initierar...'})</h1>
                <ScaledControl>
                    <svg viewBox={viewBox} style={style}>
                        <Company />
                    </svg>
                </ScaledControl>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('APP STATE:', state);
    return {
        width: state.app.width,
        height: state.app.height,
        initiated: state.app.initiated,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AppActions: bindActionCreators(appActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
