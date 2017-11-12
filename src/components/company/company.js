import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Team from 'components/team/Team';
import * as companyActions from 'redux/actions/companyActions';

class Company extends Component {
    constructor(props) {
        super(props);
        this.props.CompanyActions.getTeams();
    }

    render() {
        const style = {
            fontSize: `${this.props.fontSize}px`,
            fontWeight: this.props.fontWeight,
        };
        const teamXDistance = 8;
        const teamYDistance = 8;

        return (
            <g transform="translate(0, 0)">
                <rect width={this.props.width} height={this.props.height} x='0' y='0' fill={this.props.backgroundFill} stroke='#222222' strokeWidth='1'></rect>
                <text x="4" y={`${this.props.fontSize + 2}px`} style={style} fill={this.props.fontFill}>{this.props.company.name}</text>
                <line x1={this.props.width} y1='0' x2={this.props.width + teamXDistance} y2={teamYDistance + this.props.teamHeight / 2} style={{ stroke: 'rgb(0,0,0)', strokeWidth: 1 }} />
                {this.props.teams.map((t, i) => <Team key={i} team={t} xPos={this.props.width + teamXDistance} yPos={teamYDistance} />)}
            </g>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        width: Math.round(props.company.name.length * (state.company.fontSize / 1.65)),
        height: Math.round(state.company.fontSize * 1.7),
        fontSize: state.company.fontSize,
        fontWeight: state.company.fontWeight,
        fontFill: state.company.fontFill,
        backgroundFill: state.company.backgroundFill,
        teams: state.company.teams,
        teamHeight: state.team.height,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        CompanyActions: bindActionCreators(companyActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
