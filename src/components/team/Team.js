import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Member from 'components/member/Member';

class Team extends Component {
    render() {
        const teamStyle = {
            fontSize: `${this.props.fontSize}px`,
            fontWeight: this.props.fontWeight,
        };
        const transform = `translate(${this.props.xPos}, ${this.props.yPos})`;
        const parentDistance = {
            x: 8,
            y: 0,
            connectX: -8,
            connectY: this.props.height/2,
        };

        const polygonPoints = `0,${this.props.height / 2}, ${this.props.width / 2},0, ${this.props.width},${this.props.height / 2}, ${this.props.width / 2}, ${this.props.height}`;

        return (
            <g transform={transform}>
                <polygon points={polygonPoints} fill={this.props.backgroundFill} stroke='#222222' strokeWidth='1' />
                <text textAnchor='middle' x={this.props.width / 2} y={`${this.props.fontSize + 6}px`} style={teamStyle} fill={this.props.fontFill}>{this.props.team.name}</text>
                <line x1='0' y1={this.props.height / 2} x2={this.props.parentDistance.connectX} y2={this.props.parentDistance.connectY} style={{ stroke: 'rgb(0,0,0)', strokeWidth: 1 }} />
                <Member xPos={this.props.width + parentDistance.x} yPos={parentDistance.y} parentDistance={parentDistance} />
            </g>
        );
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
        memberWidth: state.member.width,
        memberHeight: state.member.height,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         AppActions: bindActionCreators(appActions, dispatch)
//     };
// };

export default connect(mapStateToProps, null)(Team);
