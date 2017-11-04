import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Member extends Component {
    render() {
        const style = {
            fontSize: `${this.props.fontSize}px`,
            fontWeight: this.props.fontWeight,
        };
        const transform = `translate(${this.props.xPos}, ${this.props.yPos})`;
        const polygonPoints = `0,${this.props.height/2}, ${this.props.width/2},0, ${this.props.width},${this.props.height/2}, ${this.props.width/2}, ${this.props.height}`;

        return (
            <g transform={transform}>
                {/* <rect x='0' y='0' width={this.props.width} height={this.props.height} fill={this.props.backgroundFill} stroke='#222222' strokeWidth='1'></rect> */}
                <polygon points={polygonPoints} fill={this.props.backgroundFill} stroke='#222222' strokeWidth='1' />
                <text text-anchor='middle' x={this.props.width/2} y={`${this.props.fontSize + 6}px`} style={style} fill={this.props.fontFill}>Member 1</text>
            </g>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.member.name,
        width: state.member.width,
        height: state.member.height,
        fontSize: state.member.fontSize,
        fontWeight: state.member.fontWeight,
        fontFill: state.member.fontFill,
        backgroundFill: state.member.backgroundFill,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         AppActions: bindActionCreators(appActions, dispatch)
//     };
// };

export default connect(mapStateToProps, null)(Member);
