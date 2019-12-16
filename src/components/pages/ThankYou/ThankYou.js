import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component {
    clickNewFeedback = (event) => {
        // clear out redux feedback
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK',
        })
        // navigate to first step
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Thank You!!!!</h2>
                <button onClick={this.clickNewFeedback}>Leave New Feedback</button>
            </div>
        );
    }
}

export default connect()(ThankYou);
