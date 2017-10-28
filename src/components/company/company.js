import React, { Component } from 'react';

class Company extends Component {
    render() {
        const style = {
            fill: '#ffffff',
            fontSize: '90px',
            fontWeight: 'bold',
        };

        return (
            <g>
                <rect width='800' height='200' x='0' y='0' fill='rgb(168,168,168)' stroke='#222222' strokeWidth='1'></rect>
                <text x="0" y="80" style={style}>Company</text>
            </g>
        );
    }
}

export default Company;