import React, { Component } from 'react';

import './scaled-control.less';

class ScaleControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scaleValue: 1,
        }
    }

    render() {
        return (
            <div className='ts_scaled-control' style={{ transform: `scale(${this.state.scaleValue})`, transformOrigin: 'left top' }} onClick={() => this.scale()}>
                {this.props.children}
            </div>
        );
    }

    scale() {
        let newScaleValue = Number.parseFloat((this.state.scaleValue - 0.1).toFixed(1));
        newScaleValue = newScaleValue <= 0.1 ? 1 : newScaleValue;
        console.log(this.state.scaleValue);
        this.setState({
            scaleValue: newScaleValue,
        });
    }
}

export default ScaleControls;