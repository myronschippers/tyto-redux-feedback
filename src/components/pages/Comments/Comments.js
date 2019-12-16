import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    render() {
        return (
            <div>
                COMMENTS
            </div>
        );
    }
}

export default connect()(Comments);