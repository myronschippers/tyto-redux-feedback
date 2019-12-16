import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        comments: '',
    }

    changeFeeling = (event) => {

        this.setState({
            comments: event.target.value,
        },
        () => {
            console.log(this.state.comments);
        })
    }

    clickNext = (event) => {
        // track comments in redux
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state.comments,
        });
        // go to the next page
        this.props.history.push('/review');
    }

    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <div>
                    <div>
                        <label>
                            <div>Comments</div>
                            <input
                                type="text"
                                placeholder="Comments here"
                                value={this.state.comments}
                                onChange={this.changeFeeling}
                            />
                        </label>
                    </div>
                    <div>
                        <button onClick={this.clickNext}>NEXT</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Comments);