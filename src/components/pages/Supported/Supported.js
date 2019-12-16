import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
    state = {
        supported: '',
        errorMessage: null,
    }

    changeFeeling = (event) => {
        if (event.target.value !== '') {
            this.setState({
                errorMessage: null,
            })
        }

        this.setState({
            supported: event.target.value,
        },
        () => {
            console.log(this.state.supported);
        })
    }

    clickNext = (event) => {
        // validate that there is a score
        if (this.state.supported !== '') {
            // track supported in redux
            this.props.dispatch({
                type: 'ADD_SUPPORT',
                payload: this.state.supported,
            });
            // go to the next page
            this.props.history.push('/comments');
        } else {
            // show error
            this.setState({
                errorMessage: 'You must input a number.'
            })
        }
    }

    render() {
        let errorMessageHtml = null;

        if (this.state.errorMessage != null) {
            errorMessageHtml = (
                <div className="errMsg">
                    {this.state.errorMessage}
                </div>
            );
        }

        return (
            <div>
                <h2>How well are you being supported?</h2>
                <div>
                    <div>
                        <label>
                            <div>Support?</div>
                            <input
                                type="number"
                                placeholder="Support 1 - 10"
                                value={this.state.supported}
                                onChange={this.changeFeeling}
                            />
                        </label>
                    </div>
                    <div>
                        <button onClick={this.clickNext}>NEXT</button>
                    </div>
                    {errorMessageHtml}
                </div>
            </div>
        );
    }
}

export default connect()(Supported);