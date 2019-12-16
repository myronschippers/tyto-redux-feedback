import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {
    clickSubmit = (event) => {
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: this.props.store.feedbackReducer
        })
            .then((response) => {
                console.log(response);
                this.props.history.push('/thank-you')
            })
            .catch((err) => {
                alert('Your feedback could not be submitted at this time.');
                console.error(err);
            });
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feelings: {this.props.store.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.store.feedbackReducer.understanding}</p>
                <p>Support: {this.props.store.feedbackReducer.support}</p>
                <p>Comments: {this.props.store.feedbackReducer.comments}</p>
                <div>
                    <button onClick={this.clickSubmit}>SUBMIT</button>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        store,
    } 
};

export default connect(mapStoreToProps)(Review);
