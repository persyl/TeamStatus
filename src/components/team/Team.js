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
        const memberXDistance = 8;
        const memberYDistance = 0;
        const polygonPoints = `0,${this.props.height/2}, ${this.props.width/2},0, ${this.props.width},${this.props.height/2}, ${this.props.width/2}, ${this.props.height}`;

        return (
            <g transform={transform}>
                {/* <rect x='0' y='0' width={this.props.width} height={this.props.height} fill={this.props.backgroundFill} stroke='#222222' strokeWidth='1'></rect> */}
                <polygon points={polygonPoints} fill={this.props.backgroundFill} stroke='#222222' strokeWidth='1' />
                <text text-anchor='middle' x={this.props.width/2} y={`${this.props.fontSize + 6}px`} style={teamStyle} fill={this.props.fontFill}>Team 1</text>
                <line x1={this.props.width} y1={this.props.height/2} x2={this.props.width + memberXDistance} y2={memberYDistance + this.props.memberHeight/2} style={{ stroke: 'rgb(0,0,0)', strokeWidth: 1 }} />
                <Member xPos={this.props.width + memberXDistance} yPos={memberYDistance} />
            </g>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.team.name,
        width: state.team.width,
        height: state.team.height,
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
