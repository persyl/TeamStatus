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
        const classNames = this.state.scaleValue !== 1 ? 'ts_scaled-control ts_scaled-control--active' : 'ts_scaled-control';

        return (
            <div className={classNames} style={{ transform: `scale(${this.state.scaleValue})`, transformOrigin: 'left top' }} onClick={() => this.scale()}>
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