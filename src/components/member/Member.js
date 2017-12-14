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
                <circle cx={this.props.radius} cy={this.props.radius} r={this.props.radius} stroke='#222222' strokeWidth='0.5' fill={this.props.backgroundFill} />
                <line x1='0' y1={this.props.radius} x2={this.props.parentDistance.connectX} y2={this.props.parentDistance.connectY} style={{ stroke: 'rgb(0,0,0)', strokeWidth: 0.5 }} />
                <text textAnchor='middle' x={this.props.radius} y={`${this.props.radius + 2}px`} style={style} fill={this.props.fontFill}>{this.props.member.name}</text>
            </g>
        );
    }
}

const mapStateToProps = (state, props) => {
    let radius = Math.round(props.member.name.length * 2);
    return {
        radius: radius > 12 ? radius : 12,
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
