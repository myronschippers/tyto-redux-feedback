import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
    render() {
        return (
            <div>
                SUPPORTED
            </div>
        );
    }
}

export default connect()(Supported);