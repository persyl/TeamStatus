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

        return (
            <g transform="translate(0, 0)">
                <rect width={this.props.width} height={this.props.height} x='0' y='0' fill={this.props.backgroundFill} stroke='#222222' strokeWidth='1'></rect>
                <text x="4" y={`${this.props.fontSize + 2}px`} style={style} fill={this.props.fontFill}>{this.props.name}</text>
                <Team xPos={this.props.width + 4} yPos='4' />
            </g>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.company.name,
        width: state.company.width,
        height: state.company.height,
        fontSize: state.company.fontSize,
        fontWeight: state.company.fontWeight,
        fontFill: state.company.fontFill,
        backgroundFill: state.company.backgroundFill,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         AppActions: bindActionCreators(appActions, dispatch)
//     };
// };

export default connect(mapStateToProps, null)(Company);
