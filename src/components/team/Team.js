import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Member from 'components/member/Member';
import * as teamActions from 'redux/actions/teamActions';

class Team extends Component {
    constructor(props) {
        super(props);
        this.props.TeamActions.getMembers();
    }

    render() {
        const teamStyle = {
            fontSize: `${this.props.fontSize}px`,
            fontWeight: this.props.fontWeight,
        };
        const transform = `translate(${this.props.xPos}, ${this.props.yPos})`;
        const polygonPoints = `0,${this.props.height / 2}, ${this.props.width / 2},0, ${this.props.width},${this.props.height / 2}, ${this.props.width / 2}, ${this.props.height}`;

        return (
            <g transform={transform}>
                <polygon points={polygonPoints} fill={this.props.backgroundFill} stroke='#222222' strokeWidth='0.6' />
                <text textAnchor='middle' x={this.props.width / 2} y={`${this.props.fontSize + 6}px`} style={teamStyle} fill={this.props.fontFill}>{this.props.team.name}</text>
                <line x1='0' y1={this.props.height / 2} x2={this.props.parentDistance.connectX} y2={this.props.parentDistance.connectY} style={{ stroke: 'rgb(0,0,0)', strokeWidth: 1 }} />
                {this.props.members.map((m, i) => this.renderMember(m, i))}
            </g>
        );
    }

    renderMember(member, index) {
        const yDistanceSpread = 30;
        const xPos = 8 + this.props.width;
        const yPos = 0 + index * yDistanceSpread;
        const parentDistance = {
            connectX: -8,
            connectY: this.props.height / 2 - yPos,
        };
        return (<Member key={index} member={member} xPos={xPos} yPos={yPos} parentDistance={parentDistance} />);
    }
}

const mapStateToProps = (state, props) => {
    return {
        width: Math.round(props.team.name.length * (state.team.fontSize)),
        height: 30,
        fontSize: state.team.fontSize,
        fontWeight: state.team.fontWeight,
        fontFill: state.team.fontFill,
        backgroundFill: state.team.backgroundFill,
        members: state.team.members,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        TeamActions: bindActionCreators(teamActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
