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
        
        return (
            <g transform={transform}>
                <circle cx={this.props.width/2} cy={this.props.width/2} r={this.props.width/2} stroke='#222222' strokeWidth='1' fill={this.props.backgroundFill} />
                <text textAnchor='middle' x={this.props.width/2} y={`${this.props.fontSize + 6}px`} style={style} fill={this.props.fontFill}>{this.props.name}</text>
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
