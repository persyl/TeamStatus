import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Company from './components/company/Company';
import ScaledControl from './components/scaledControl/ScaledControl';
import * as appActions from './redux/actions/appActions';

import './app.less';

class App extends Component {
    constructor(props) {
        super(props);
        if (!this.props.initiated) {
            this.props.AppActions.appInit();
        }
    }

    render() {
        return (
            <div className='ts_output__main'>
                <h1>Team Status App ({this.props.initiated ? 'Redo' : 'Initierar...'})</h1>
                {this.props.companies.map((c, i) => this.renderCompanies(c, i))}

            </div>
        );
    }

    renderCompanies(company, idx) {
        const viewBox = `0 0 ${this.props.width} ${this.props.height}`;
        return (<ScaledControl key={idx}>
            <svg viewBox={viewBox} className='ts_output__main__svg'>
                <Company company={company} />
            </svg>
        </ScaledControl>);
    }
}

const mapStateToProps = (state) => {
    return {
        width: state.app.width,
        height: state.app.height,
        initiated: state.app.initiated,
        companies: state.app.companies,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AppActions: bindActionCreators(appActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
