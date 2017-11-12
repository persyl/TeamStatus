import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Team from 'components/team/Team';

class Company extends Component {
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
                <text x="4" y={`${this.props.fontSize + 2}px`} style={style} fill={this.props.fontFill}>{this.props.name}</text>
                <line x1={this.props.width} y1='0' x2={this.props.width + teamXDistance} y2={teamYDistance + this.props.teamHeight / 2} style={{ stroke: 'rgb(0,0,0)', strokeWidth: 1 }} />
                <Team xPos={this.props.width + teamXDistance} yPos={teamYDistance} />
            </g>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        width: Math.round(props.name.length * (state.company.fontSize/1.65)),
        height: state.company.height,
        fontSize: state.company.fontSize,
        fontWeight: state.company.fontWeight,
        fontFill: state.company.fontFill,
        backgroundFill: state.company.backgroundFill,
        teamHeight: state.team.height,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         AppActions: bindActionCreators(appActions, dispatch)
//     };
// };

export default connect(mapStateToProps, null)(Company);
