import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Company extends Component {
    render() {
        const style = {
            fill: this.props.fill,
            fontSize: `${this.props.fontSize}px`,
            fontWeight: this.props.fontWeight,
        };

        return (
            <g>
                <rect width={this.props.width} height={this.props.height} x='0' y='0' fill='rgb(168,168,168)' stroke='#222222' strokeWidth='1'></rect>
                <text x="4" y={`${this.props.fontSize + 2}px`} style={style}>Company</text>
            </g>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        width: state.company.width,
        height: state.company.height,
        fontSize: state.company.fontSize,
        fontWeight: state.company.fontWeight,
        fill: state.company.fill,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         AppActions: bindActionCreators(appActions, dispatch)
//     };
// };

export default connect(mapStateToProps, null)(Company);
